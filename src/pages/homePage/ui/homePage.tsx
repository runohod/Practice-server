import { getCharacters } from "@/entities/character";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef } from "react";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("name") ?? "");
  const [debouncedSearch, setDebouncedSearch] = useState(
    searchParams.get("name") ?? "",
  );
  const [status, setStatus] = useState(searchParams.get("status") ?? "");
  // const [page, setPage] = useState(Number(searchParams.get("page") ?? "1"));
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 2000);
    return () => clearTimeout(timer);
  }, [search]);
  const characters = useInfiniteQuery({
    queryKey: ["characters", debouncedSearch, status],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getCharacters(debouncedSearch, status, pageParam),
    getNextPageParam: (lastPage, _allPages, lastPageParam) =>
      lastPage.info.next ? lastPageParam + 1 : undefined,
  });
  const allCharacters =
    characters.data?.pages.flatMap((page) => page.results) ?? [];
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!loadMoreRef.current || !characters.hasNextPage) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && characters.hasNextPage) {
        characters.fetchNextPage();
      }
    });
    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [characters.hasNextPage]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-neutral-900">
      <header className="w-full max-w-6xl px-4 py-6">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Rick and Morty</h1>
        <div className="flex flex-wrap gap-3">
          <input
            className="text-red-500 border"
            onChange={(event) => setSearch(event.target.value)}
            value={search}
          />
          <select
            className="text-red-500 border"
            value={status}
            onChange={(event) => {
              setStatus(event.target.value);
              const nextParams = new URLSearchParams(searchParams);
              if (event.target.value === "") {
                nextParams.delete("status");
              } else {
                nextParams.set("status", event.target.value);
              }
              setSearchParams(nextParams);
            }}
          >
            <option className="text-red-500" value="">
              «Все статусы»
            </option>
            <option className="text-red-500" value="Alive">
              «Живые»
            </option>
            <option className="text-red-500" value="Dead">
              «Мёртвые»
            </option>
          </select>
        </div>
      </header>
      {characters.isPending && <div className="text-red-500">loading...»</div>}
      {characters.isError && <div className="text-red-500">error</div>}
      {characters.data && (
        <section className="w-full max-w-6xl px-4">
          {allCharacters.length === 0 && (
            <p className="text-red-500">пустой результат</p>
          )}
          <p className="text-red-500">{allCharacters.length}</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {allCharacters.map((character) => (
              <Link
                to={`/characters/${character.id}`}
                key={character.id}
                className="text-red-500 flex gap-4 items-center rounded-xl border border-neutral-700 bg-neutral-800 p-4"
              >
                <div className="w-64">
                  <h2 className="text-xl font-semibold text-white">
                    {character.name}
                  </h2>{" "}
                  {character.status} - {character.species} - {character.gender}{" "}
                  - {character.origin.name}
                </div>{" "}
                <img
                  className="w-32 h-32 object-cover"
                  src={character.image}
                  alt={character.name}
                />
              </Link>
            ))}
          </div>
          <div ref={loadMoreRef} className="h-1"></div>
        </section>
      )}
    </div>
  );
};
