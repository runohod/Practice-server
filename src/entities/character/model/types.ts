export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {name: string; url: string;};
  image: string;
};

export type CharactersResponse = {
    results: Character[];
    info: Info;
};

export type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}