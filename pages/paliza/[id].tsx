import { Card, Grid, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Paliza } from "../../components/interfaces";
import MainLayout from "../../components/layouts/MainLayout";
import { useEffect, useState } from "react";
import gifSearch from "../../api/gifApi";
import { peopleApi, savePaliza } from "../../api/peopleApi";
import axios from "axios";
import { SERVER } from "../../config/constants";

interface Props {
  paliza: Paliza;
  gif: any;
}

const PalizaPage: NextPage<Props> = ({ paliza, gif }) => {
  const [numeroPalizas, setNumero] = useState();
  useEffect(() => {
    axios.get(`${SERVER}/api/paliza?id=${paliza.id}`).then((res) => setNumero(res.data.data));
  });
  return (
    <MainLayout title="Toma tu paliza">
      <h1>{paliza.nombre}</h1>
      <h3>Haz recibido una paliza</h3>
      <Grid.Container css={{ marginTop: "5px" }} justify="center">
        <Grid xs={4}>
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

export async function getServerSideProps(ctx: any) {
  const { id } = ctx.params as { id: string };
  savePaliza(parseInt(id));

  const res = await peopleApi();
  let peoples: any[] = new Array<Paliza>();
  let people: any = new Array<Paliza>();
  let resp: any;
  let indice: number = 0;
  if (res.success) {
    peoples = res.data?.map((data: any) => ({
      nombre: data.nombre,
      id: data.id,
      img: `https://raw.githubusercontent.com/joshua1983/palizasporencargo/main/public/people/${data.imgName}`,
    }));
    people = peoples.filter((p: any) => p.id.toString() === id);
    resp = await gifSearch("fight");
    indice = Math.floor(Math.random() * 10);
  }

  return {
    props: {
      paliza: people[0],
      gif: `https://media.giphy.com/media/${resp.data[indice].id}/giphy.gif`,
    },
  };
}


export default PalizaPage;
