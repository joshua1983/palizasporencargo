import { Grid, Text } from "@nextui-org/react";
import Image from "next/image";
import logoNextJs from "../../public/next.png";

function Footer() {
  return (
    <div>
      <Grid.Container css={{ marginBottom: "5%" }} justify="center">
        <code>Version 1.1</code>
      </Grid.Container>
    </div>
  );
}

export default Footer;
