import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Paliza } from "../interfaces";

interface Props {
  poke: Paliza;
}

export const PalizaCard: FC<Props> = ({ poke: paliza }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/paliza/${paliza.id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={paliza.id}>
      <Card isHoverable isPressable onClick={onClick}>
        <Card.Body css={{ p: 10}}>
          <Card.Image src={paliza.img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{paliza.nombre}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
