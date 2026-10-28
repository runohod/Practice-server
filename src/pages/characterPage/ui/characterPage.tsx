import { useParams } from "react-router-dom";
import { getCharacterById } from "@/entities/character";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export function CharacterPage() {
  const params = useParams<{ id: string }>();
  const id = params.id ?? "";
  const nextId = Number(id) + 1;
  const character = useQuery({
    queryKey: ["character", id],
    queryFn: () => getCharacterById(id),
    enabled: id !== "",
  });
  if (id === "") {
    return <div>Не указан номер персонажа</div>;
  }
  if (character.isPending) {
    return <div>Загрузка персонажа…</div>;
  }
  return (
    <main className="min-h-screen bg-neutral-900 text-white p-6">
      {" "}
      <h1 className="text-3xl font-bold text-red-500 mb-6 text-center">
        Страница персонажа {character.data?.name || "Имя не указано"}
      </h1>{" "}
      <img
        className="block mx-auto rounded-xl"
        src={character.data?.image}
        alt={character.data?.name}
      />{" "}
      <div className="mt-4 text-center text-neutral-300">
        {character.data?.gender} - {character.data?.origin.name} -{" "}
        {character.data?.status} - {character.data?.species}
      </div>
      <Link
        className="block w-fit mx-auto mt-6 rounded-lg bg-red-600 px-5 py-3 text-lg font-semibold text-white"
        to={`/characters/${nextId}`}
      >
        Следующий персонаж
      </Link>
    </main>
  );
}
