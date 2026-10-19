import { apiUrl } from "@/shared/api/config";
import type { CharactersResponse } from "@/entities/character/model/types";

export async function getCharacters(
  person: string,
  status: string,
  page: number
): Promise<CharactersResponse> {
  let CharacterUrl = apiUrl + "/character?name=" + person + "&status=" + status + "&page=" + page;
  const response = await fetch(CharacterUrl);
  if (response.status === 404) {
    return { results: [], info: { count: 0, pages: 0, next: null, prev: null} };
  }
  if (!response.ok) {
    throw new Error("Не удалось выполнить действие");
  }
  const data = await response.json();
  return data;
}
