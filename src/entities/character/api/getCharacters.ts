import {apiUrl} from "@/shared/api/config";
import type {CharactersResponse} from "@/entities/character/model/types"

async function getCharacters(): Promise<CharactersResponse> {
    let CharacterUrl = apiUrl + "/character";
    const response = await fetch (CharacterUrl);
    const data = await response.json();
    return data;
}