import { Badge } from "@nextui-org/react";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Paliza } from "../interfaces";
import { SERVER } from "../../config/constants";

interface Props {
  paliza: Paliza;
}

export const PalizaCounter: FC<Props> = ({ paliza }) => {
  const [numeroPalizas, setNumero] = useState();
  useEffect(() => {
    axios.get(`${SERVER}/api/paliza?id=${paliza.id}`).then((res) => setNumero(res.data.data));
  });
  return <Badge color="error">{numeroPalizas}</Badge>;
};
