import React from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  Stack,
  useColorMode,
  Spacer,
  Image
} from "@chakra-ui/react";
import CartWidget from "../Carrito/CartWidget";
import Logo from "../Logo/Logo";
import ButtonToggleColorMode from "../ButtonToggleColorMode";
export default function Navbar() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Logo tipo={'navbar'} temaActual={colorMode} />
          </Box>
          <Spacer />
          <Box>
            <Flex gap={5}>
              <a href="#">Home</a>
            </Flex>
          </Box>
          <Spacer />
          <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
              <CartWidget />
            </Stack>
            <Stack direction={"row"} spacing={7}>
              <ButtonToggleColorMode />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}


