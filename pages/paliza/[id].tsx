import { Card, Grid, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { peopleApi } from "../../api";
import { Paliza, PalizaListResponse } from "../../components/interfaces";
import MainLayout from "../../components/layouts/MainLayout";

interface Props {
  pokemon: Paliza;
}

const PokemonPage: NextPage<Props> = ({ pokemon: paliza }) => {
  return (
    <MainLayout title="algun poke">
          <h1>{paliza.nombre}</h1>

          <Grid.Container css={{marginTop:'5px'}}>
              <Grid xs={12} >
                  <Card isHoverable css={{ padding: '30px' }}>
                      <Card.Body>
                          <Card.Image src={paliza.img || '/no-image.png'} alt={paliza.nombre} width="100%" height={200} />

                      </Card.Body>
                  </Card>
              </Grid>
              <Grid xs={12} sm={8}>
                  <Card>
                      <Card.Header css={{display:'flex', justifyContent:'space-between'}}>
                          <Text h1 transform="capitalize">{paliza.nombre}</Text>
                      </Card.Header>
                      <Card.Body>
                          <Text size={30}>Paliza recibida</Text>
                         
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

  const { data } = await peopleApi.get<PalizaListResponse>('/data.json');

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
