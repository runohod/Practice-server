import { apiUrl } from "@/shared/api/config";
import type { Character } from "@/entities/character/model/types";

export async function getCharacterById (id: string): Promise<Character> {
    const url = apiUrl + "/character/" + id;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Не удалось выполнить действие");
    }
    const data = await response.json();
    return data;
}