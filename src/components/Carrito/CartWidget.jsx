import { Button, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function CartWidget() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button paddingX={"0.2rem"} color={"white"} marginRight={"1rem"} textColor={colorMode === 'dark'? 'light': 'dark'} border={colorMode != 'dark'? '1px solid grey': ''} >
      <FaShoppingCart />
      <TagCantidadProductos cantidad={15} />
    </Button>
  );
}

function TagCantidadProductos({ cantidad = 1 }) {
const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Text
        position={"absolute"}
        right={"-0.5rem"}
        top={"-0.5rem"}
        rounded={"1rem"}
        paddingX={"0.3rem"}
        paddingY={"0.1rem"}
        fontSize={"0.8rem"}
        bg={"blue"}
        textColor={'white'}
        
      >
        {cantidad}
      </Text>
    </>
  );
}
