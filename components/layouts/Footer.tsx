import { Text } from "@nextui-org/react";
import Image from "next/image";
import logoNextJs from "../../public/next.png";

function Footer() {
  return (
    <div>
      <Image src={logoNextJs} alt="NextJS"
        width={103}
        height={62}
      ></Image>
      <Text>Codigo fuente: <a href="https://github.com/joshua1983/palizasporencargo">GitHub</a></Text>
    </div>
  );
}

export default Footer;
