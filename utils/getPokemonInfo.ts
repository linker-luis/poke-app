import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (nameOrid: string) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrid}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
