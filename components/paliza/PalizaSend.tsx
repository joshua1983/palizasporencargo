import { Button, Code, Popover, Text } from "@nextui-org/react";
import React, { FC } from "react";
import { Paliza } from "../interfaces";
import { SERVER } from "../../config/constants";
import { CopyIcon } from "./icons/CopyIcon";

interface Props {
  paliza: Paliza;
}

const PalizaSend: FC<Props> = ({ paliza }) => {
  const copyUrl = async () => {
    await navigator.clipboard.writeText(`${SERVER}/paliza/${paliza.id}`);
  };
  return (
    <Popover isBordered disableShadow>
      <Popover.Trigger>
        <Button color="error" bordered auto>
          Enviar paliza
        </Button>
      </Popover.Trigger>
      <Popover.Content>
        <Text css={{ p: "$10" }}>
          Envia este enlace:
          <Code>{`${SERVER}/paliza/${paliza.id}`}</Code>
          <Button
            onPress={copyUrl}
            auto
            icon={<CopyIcon link={`${SERVER}/paliza/${paliza.id}`} fill="currentColor" filled />}
          >
            Copiar
          </Button>
        </Text>
      </Popover.Content>
    </Popover>
  );
};

export default PalizaSend;
