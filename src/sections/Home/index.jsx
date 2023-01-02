import { Flex } from "@chakra-ui/react";
import React from "react";
import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <Flex flexDir="column">
      <Header />
      Aqui virá uma breve explicação sobre o aplicativo...
    </Flex>
  );
};
