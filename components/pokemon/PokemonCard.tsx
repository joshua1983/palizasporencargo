import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { SmallPokemon } from "../interfaces";

interface Props {
  poke: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ poke }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${poke.id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={poke.id}>
      <Card isHoverable isPressable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={poke.img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{poke.name}</Text>
            <Text>{poke.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
