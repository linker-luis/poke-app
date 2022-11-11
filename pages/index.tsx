import { Grid } from "@nextui-org/react";
import type { NextPage, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { pokeApi } from "../api";
import { Layout } from "../components/layout";
import { PokemonCard } from "../components/pokemon";
import { PokemonListResponse, SmallPokemons } from "../interfaces";

interface Props {
  pokemons: SmallPokemons[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  const router = useRouter();

  return (
    <Layout title="Listado de Pokemons">
      {/* <Image src="/img/banner.png" width={200} height={150} alt="" /> */}

      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemons[] = data.results.map((pok, i) => ({
    ...pok,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
