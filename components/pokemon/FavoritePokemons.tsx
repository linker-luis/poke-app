import { Grid } from "@nextui-org/react";
import React from "react";
import FavouriteCardPokemon from "./FavouriteCardPokemon";

interface props {
  pokemons: number[];
}

function FavoritePokemons({ pokemons }: props) {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavouriteCardPokemon key={id} pokemonId={id} />
      ))}
    </Grid.Container>
  );
}

export default FavoritePokemons;
