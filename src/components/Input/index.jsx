import React from "react";
import { Input, Flex } from "@chakra-ui/react";

export const Input = ({ ...props }) => {
  return (
    <Flex>
      <Input {...props} />
    </Flex>
  );
};
