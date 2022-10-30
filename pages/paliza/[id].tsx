import { Card, Grid, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Paliza } from "../../components/interfaces";
import MainLayout from "../../components/layouts/MainLayout";
import { useEffect } from "react";
import gifSearch from "../../api/gifApi";
import { savePaliza, peopleApi } from "../../api/peopleApi";

interface Props {
  paliza: Paliza;
  gif: any;
  numeroPalizas: number;
}

const PalizaPage: NextPage<Props> = ({ paliza, gif, numeroPalizas }) => {
  return (
    <MainLayout title="Toma tu paliza">
      <h1>{paliza.nombre}</h1>
      <h3>Haz recibido una paliza</h3>
      <Grid.Container css={{ marginTop: "5px" }} justify="center">
        <Grid xs={3}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image src={gif} alt={paliza.nombre} width="100%" height={140} />
              <Text>Número de palizas recibidas: {numeroPalizas}</Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const listaPeople = [...Array(20)].map((value, index) => `${index + 1}`);

  return {
    paths: listaPeople.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as { id: string };

  const res = await peopleApi();
  let peoples: any[] = new Array<Paliza>();
  let people: any = new Array<Paliza>();
  let resp: any;
  let indice: number = 0;
  let numeroPalizas: number = 0;
  if (res.success) {
    peoples = res.data?.map((data: any) => ({
      nombre: data.nombre,
      id: data.id,
      img: `https://raw.githubusercontent.com/joshua1983/palizasporencargo/main/public/people/${data.imgName}`,
    }));
    people = peoples.filter((p: any) => p.id.toString() === id);
    resp = await gifSearch("fight");
    indice = Math.floor(Math.random() * 10);

    let dataResponse = await savePaliza(people[0]);
    numeroPalizas = dataResponse.data;
  }

  return {
    props: {
      paliza: people[0],
      gif: `https://media.giphy.com/media/${resp.data[indice].id}/giphy.gif`,
      numeroPalizas: numeroPalizas,
    },
  };
};

export default PalizaPage;
