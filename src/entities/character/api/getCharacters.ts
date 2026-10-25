import { apiUrl } from "@/shared/api/config";
import type { CharactersResponse } from "@/entities/character/model/types";

export async function getCharacters(
  person: string,
  status: string,
  page: number,
): Promise<CharactersResponse> {
  const params = new URLSearchParams({
    name: person,
    status: status,
    page: String(page),
  });
  const characterUrl = apiUrl + "/character?" + params.toString();
  const response = await fetch(characterUrl);
  if (response.status === 404) {
    return {
      results: [],
      info: { count: 0, pages: 0, next: null, prev: null },
    };
  }
  if (!response.ok) {
    throw new Error("Не удалось выполнить действие");
  }
  const data = await response.json();
  return data;
}
