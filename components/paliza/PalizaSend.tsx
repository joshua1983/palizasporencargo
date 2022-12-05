import { Button, Code, Popover, Text } from "@nextui-org/react";
import React, { FC, useState } from "react";
import { Paliza } from "../interfaces";
import { SERVER } from "../../config/constants";
import { CopyIcon } from "./icons/CopyIcon";
import { Checkbox } from "@nextui-org/react";

interface Props {
  paliza: Paliza;
}

const PalizaSend: FC<Props> = ({ paliza }) => {
  let urlToCopy = `${SERVER}/recibir/${paliza.id}`;
  const copyUrl = async () => {
    await navigator.clipboard.writeText(url);
  };
  const [head, setHead] = useState(false);
  const [url, setUrl] = useState(urlToCopy);
  const setHorse = (val: boolean) => {
    setHead(val);
    if (val == true) {
      urlToCopy = `${SERVER}/recibir/${paliza.id}/1`;
      setUrl(urlToCopy);
    } else {
      urlToCopy = `${SERVER}/recibir/${paliza.id}`;
      setUrl(urlToCopy);
    }
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
          <Code>{url}</Code> <br />
          <Checkbox isSelected={head} onChange={(val) => setHorse(val)}>
            <div>
              Incluir cabeza de caballo
              <span role="img" aria-label="horse">
                &#x1F434;
              </span>
            </div>
          </Checkbox>
          <Button onPress={copyUrl} auto icon={<CopyIcon link={url} fill="currentColor" filled />}>
            Copiar
          </Button>
        </Text>
      </Popover.Content>
    </Popover>
  );
};

export default PalizaSend;
