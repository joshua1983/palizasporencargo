import { Card, Grid, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { peopleApi } from "../../api";
import { Paliza, PalizaListResponse } from "../../components/interfaces";
import MainLayout from "../../components/layouts/MainLayout";

interface Props {
  paliza: Paliza;
}

const PalizaPage: NextPage<Props> = ({ paliza }) => {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <MainLayout title="Toma tu paliza">
      <h1>{paliza.nombre}</h1>
      <h3>Haz recibido una paliza</h3>
      <Grid.Container css={{ marginTop: "5px" }} justify="center">
        <Grid xs={12}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image src={"https://i.gifer.com/177l.gif"} alt={paliza.nombre} width="100%" height={140} />
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

  const { data } = await peopleApi.get<PalizaListResponse>("/data.json");
  const peoples: Paliza[] = data.usuarios?.map((people, index) => ({
    ...people,
    id: people.id,
    img: `https://raw.githubusercontent.com/joshua1983/palizasporencargo/main/public/people/${people.imgName}`,
  }));

  const people = peoples.filter((p) => p.id.toString() === id);

  return {
    props: {
      paliza: people[0],
    },
  };
};

export default PalizaPage;
