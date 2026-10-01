import {apiUrl} from "@/shared/api/config";
import type {CharactersResponse} from "@/entities/character/model/types"

export async function getCharacters(): Promise<CharactersResponse> {
    let CharacterUrl = apiUrl + "/character";
    const response = await fetch (CharacterUrl);
    if (!response.ok) {
        throw new Error("Не удалось выполнить действие");
    }
    const data = await response.json();
    return data;
}