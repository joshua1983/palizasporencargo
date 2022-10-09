import Image from "next/image";
import React from "react";
import logoNextJs from "../../public/next.png";

function Footer() {
  return (
    <div>
      <Image src={logoNextJs} alt="NextJS"
        width={103}
        height={62}
      ></Image>
    </div>
  );
}

export default Footer;
