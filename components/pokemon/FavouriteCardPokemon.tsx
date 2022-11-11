import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface props {
  pokemonId: number;
}

const FavouriteCardPokemon: FC<props> = ({ pokemonId }) => {
  const router = useRouter();

  const onFavouriteClicked = () => {
    router.push(`pokemon/${pokemonId}`);
  };
  return (
    <Grid xs={6} sm={3} md={2} xl={1} onClick={onFavouriteClicked}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width="100%"
          height="140px"
        />
      </Card>
    </Grid>
  );
};

export default FavouriteCardPokemon;
