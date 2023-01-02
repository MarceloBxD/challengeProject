import React from "react";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Img } from "@chakra-ui/react";
import logo from "../../assets/images/file.svg";

export const Header = () => {
  return (
    <Flex w="100%" align="center" px="10px" justify="space-between" h="8vh">
      <Flex>
        <Link to="/">
          <Img cursor="pointer" w="200px" src={logo} />
        </Link>
      </Flex>
      <Flex gap="15px">
        <Link to="/soluctions">Soluctions</Link>
        <Link to="/prices">Prices</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/contact">Contact</Link>
      </Flex>
    </Flex>
  );
};
