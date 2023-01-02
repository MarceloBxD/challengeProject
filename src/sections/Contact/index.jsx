import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { Header } from "../../components/Header";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const isError = email === "";

  return (
    <Flex flexDir="column">
      <Header />
      <FormControl p="30px" m="30px auto" w="500px" isInvalid={isError}>
        <Flex gap="10px" flexDir="column">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isError ? (
            <FormHelperText>
              Enter the email you'd like to receive the newsletter on.
            </FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
          <FormLabel>Telefone</FormLabel>
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {!isError ? (
            <FormHelperText>
              Give us your phone number so we can contact you.
            </FormHelperText>
          ) : (
            <FormErrorMessage>A number is required.</FormErrorMessage>
          )}
          <FormLabel>Country</FormLabel>
          <Input
            type="text"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          {!isError ? (
            <FormHelperText>Give us your country.</FormHelperText>
          ) : (
            <FormErrorMessage>Country is required.</FormErrorMessage>
          )}
        </Flex>
      </FormControl>
    </Flex>
  );
};
