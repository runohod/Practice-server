import { getCharacters } from "@/entities/character";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const HomePage = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  let characters = useQuery({
    queryKey: ["characters", search, status, page],
    queryFn: () => getCharacters(search, status, page),
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900">
      <h1 className="text-3xl font-bold text-red-500">Rick and Morty</h1>
      <input
        className="text-red-500 border"
        onChange={(event) => setSearch(event.target.value)}
        value={search}
      />
      <select
        className="text-red-500 border"
        value={status}
        onChange={(event) => setStatus(event.target.value)}
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
      <button className="text-red-500 border" onClick={() => setPage(page + 1)}>
        «вперед»
      </button>
      <button className="text-red-500 border" disabled={page === 1} onClick={() => setPage(page - 1)}>
        «назад»
      </button>
      {characters.isPending && <p className="text-red-500">loading...»</p>}
      {characters.isError && <p className="text-red-500">error</p>}
      {characters.data && (
        <section>
          {characters.data.results.length === 0 && (
            <p className="text-red-500">пустой результат</p>
          )}
          <p className="text-red-500">{characters.data.results.length}</p>
          {characters.data.results.map((character) => (
            <div key={character.id} className="text-red-500 flex gap-4">
              <p className="w-64">
                {character.name} - {character.status} - {character.species} -{" "}
                {character.gender} - {character.origin.name}
              </p>{" "}
              <img src={character.image} alt={character.name} />
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
