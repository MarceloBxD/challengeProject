import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Header } from "../../components/Header";

export const Home = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Flex
      bgColor="rgba(0, 0, 0, 0.5)"
      w="100%"
      h="100vh"
      p="20px"
      flexDir="column"
    >
      <Header />
      <Button
        onClick={() => {
          setShowDetails(!showDetails);
        }}
        w="400px"
        m="0 auto"
        variant="ghost"
      >
        Quer saber mais sobre o produto? Clique aqui!
      </Button>
      {showDetails && (
        <Text
          bgColor="#fff"
          borderRadius="20px"
          m="30px auto"
          p="20px"
          w="500px"
          textAlign="justify"
        >
          Nosso produto é composto pelas seguintes soluções: Transcrição de
          Áudio Assíncrono (áudio pré-gravado): API de transcrição de voz
          assíncrona para áudio pré-gravado. Temos uma das melhores engines de
          reconhecimento de fala do mundo! O recurso speech-to-text assíncrono é
          um parceiro estratégico para o seu negócio. Esteja você extraindo
          insights de áudio ou transcrevendo conteúdo em escala. Transcrição de
          Áudio em tempo real (streaming): O recurso live-speech-to-text de
          transcrição ao vivo possibilita o uso de legendas em tempo real para o
          seu negócio. Nossas legendas garantem que as palestras e treinamentos
          ao vivo sejam acessíveis e possam ser arquivadas para uso futuro.
          Identificação de Idiomas em áudios: Obtendo fala e insights a nível
          global. Nossa solução tem suporte a 52 idiomas. Análise de sentimento
          a partir do áudio (áudio pré-gravado): Encontre os momentos mais
          importantes em trechos de falas, diferencie falas positivas e
          negativas e tome decisões de negócios mais assertivas com uma
          compreensão mais profunda.
        </Text>
      )}
    </Flex>
  );
};
