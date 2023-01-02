import React, { useState } from "react";
import { Header } from "../../components/Header";
import {
  Flex,
  Textarea,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Checkbox,
  Button,
  useToast,
} from "@chakra-ui/react";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const toast = useToast();

  {
    email && phone && country && message
      ? () => setIsDisabled(false)
      : () => setIsDisabled(true);
  }

  const isError = email === "";

  const sendInfos = () => {
    console.log("Email: ", email);
    console.log("Country: ", country);
    console.log("Phone: ", phone);
    console.log("Message: ", message);

    if (email && phone && country && message) {
      toast({
        title: "Your message was invited as sucessfuly.",
        description: "We are caring about this to you.",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
    } else {
      toast({
        title: "Your message was not invited as sucessfuly.",
        description: "Please, fill all the fields.",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
    }

    setEmail("");
    setCountry("");
    setPhone("");
    setMessage("");
  };

  return (
    <Flex flexDir="column">
      <Header />
      <FormControl p="30px" m="30px auto" w="500px" isInvalid={isError}>
        <Flex gap="10px" flexDir="column">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="user@mail.com"
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
            placeholder="(00) 0000-0000"
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
            placeholder="Brazil"
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
          <FormLabel>Message</FormLabel>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
          />
          <Checkbox
            isDisabled={isDisabled}
            isChecked={isChecked}
            onChange={(e) => {
              setIsChecked(e.target.checked);
            }}
          >
            Eu concordo com a Política de Privacidade.
          </Checkbox>
          <Button
            onClick={() => sendInfos()}
            colorScheme="blue"
            variant="ghost"
            type="submit"
          >
            Send
          </Button>
        </Flex>
      </FormControl>
    </Flex>
  );
};
