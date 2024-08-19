import React from "react";
import MinLogoDark from "./logoDark.png";
import MinLogoLight from "./logoLight.png";
import { Image } from "@chakra-ui/react";

export default function Logo({ tipo, temaActual }) {
  let logo =
    tipo == "navbar"
      ? temaActual == "dark"
        ? MinLogoLight
        : MinLogoDark
      : null;
  return <Image src={logo} w={"80px"}></Image>;
}
