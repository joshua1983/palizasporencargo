import { Card, Grid, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Paliza } from "../../components/interfaces";
import MainLayout from "../../components/layouts/MainLayout";
import { useEffect, useState } from "react";
import gifSearch from "../../api/gifApi";
import { peopleApi, savePaliza } from "../../api/peopleApi";
import axios from "axios";
import { SERVER } from "../../config/constants";
import horseHead from "../../public/head_horse.gif";
import Image from "next/image";
import { Collapse } from "@nextui-org/react";

interface Props {
  paliza: Paliza;
}

const PalizaHead: NextPage<Props> = ({ paliza }) => {
  return (
    <Collapse.Group>
      <Collapse title="Click aqui para el bonus!!">
        <Image src={horseHead} alt={paliza.nombre} width="290" height={240}></Image>
      </Collapse>
    </Collapse.Group>
  );
};

export default PalizaHead;
