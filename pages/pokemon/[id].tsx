import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import React from "react";
import { pokeApi } from "../../api";
import { Pokemon, PokemonListResponse, SmallPokemon } from "../../components/interfaces";
import MainLayout from "../../components/layouts/MainLayout";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <MainLayout title="algun poke">
          <h1>{pokemon.name}</h1>

          <Grid.Container css={{marginTop:'5px'}}>
              <Grid xs={12} >
                  <Card isHoverable css={{ padding: '30px' }}>
                      <Card.Body>
                          <Card.Image src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'} alt={pokemon.name} width="100%" height={200} />

                      </Card.Body>
                  </Card>
              </Grid>
              <Grid xs={12} sm={8}>
                  <Card>
                      <Card.Header css={{display:'flex', justifyContent:'space-between'}}>
                          <Text h1 transform="capitalize">{pokemon.name}</Text>
                          <Button color="gradient" ghost>Guardar en favoritos</Button>
                      </Card.Header>
                      <Card.Body>
                          <Text size={30}>Sprites</Text>
                          <Container>
                              <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
                              <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
                              <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
                              <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
                          </Container>
                      </Card.Body>
                  </Card>
              </Grid>
          </Grid.Container>
    </MainLayout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemon15 = [...Array(15)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemon15.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as { id: string };

  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
