import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Paliza } from "../interfaces";
import { PalizaCounter } from "./PalizaCounter";
import PalizaSend from "./PalizaSend";

interface Props {
  poke: Paliza;
}

export const PalizaCard: FC<Props> = ({ poke: paliza }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/paliza/${paliza.id}`);
  };

  return (
    <Grid xs={6} sm={4} md={3} xl={2} key={paliza.id}>
      <Card isHoverable isPressable onClick={onClick}>
        <Card.Body css={{ p: 10 }}>
          <Card.Image src={paliza.img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{paliza.nombre}</Text>
          </Row>
          <Row>
            <PalizaCounter paliza={paliza} key={paliza.id} />
          </Row>
          <Row>
            <PalizaSend paliza={paliza} />
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
