import { useParams } from "react-router-dom";
import { getCharacterById } from "@/entities/character";
import { useQuery } from "@tanstack/react-query";

export function CharacterPage() {
  const params = useParams<{ id: string }>();
  const id = params.id ?? "";
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
    <>
      {" "}
      <h1>Страница персонажа {character.data?.name || "Имя не указано"}</h1>{" "}
      <img src={character.data?.image} alt={character.data?.name} />{" "}
      {character.data?.gender} - {character.data?.origin.name} -{" "}
      {character.data?.status} - {character.data?.species}
    </>
  );
}
