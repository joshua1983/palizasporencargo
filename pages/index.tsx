import { Grid } from "@nextui-org/react";
import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { GetStaticProps, NextPage } from "next";
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../components/interfaces";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <MainLayout title="palizas por encargo">
      <h1 className={"title"}>Palizas por encargo</h1>

      <h3>Seleccione el destinatario de la paliza</h3>

      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((poke) => (
          <PokemonCard poke={poke} key={poke.id} />
        ))}
      </Grid.Container>
    </MainLayout>
  );
};


export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=15");
  const pokemons: SmallPokemon[] = data.results.map((poke, index) => ({
    ...poke,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
