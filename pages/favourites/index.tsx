import { Card, Container, Grid, Image, Text } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import FavoritePokemons from "../../components/pokemon/FavoritePokemons";
import { NoFavourites } from "../../components/ui";
import { localFavourites } from "../../utils";

const FavouritesPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavourites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons - Favoritos">
      {favoritesPokemons.length === 0 ? (
        <NoFavourites />
      ) : (
        <FavoritePokemons pokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default FavouritesPage;
