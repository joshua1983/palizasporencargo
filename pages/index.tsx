import { Grid } from "@nextui-org/react";
import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { GetStaticProps, NextPage } from "next";
import { peopleApi } from "../api";
import { PalizaListResponse, Paliza } from "../components/interfaces";
import { PalizaCard } from "../components/paliza";

interface Props {
  peoples: Paliza[];
}

const HomePage: NextPage<Props> = ({ peoples }) => {
  console.log(peoples)
  return (
    <MainLayout title="palizas por encargo">
      <h1 className={"title"}>Palizas por encargo</h1>

      <h3>Seleccione el destinatario de la paliza</h3>

      <Grid.Container gap={2} justify="flex-start">
        {peoples?.map((people) => (
          <PalizaCard poke={people} key={people.id} />
        ))}
      </Grid.Container>
    </MainLayout>
  );
};


export const getStaticProps: GetStaticProps = async (ctx) => {
  const {data} = await peopleApi.get<PalizaListResponse>("/data.js");
  const people: Paliza[] = data.usuarios?.map((people, index) => ({
    ...people,
    id: people.id,
    img: `https://raw.githubusercontent.com/joshua1983/palizasporencargo/main/public/people/${people.imgName}`,
  }));
console.log(people)
  return {
    props: {
      people,
    },
  };
};

export default HomePage;
