import React, { useState } from "react";
import { Header } from "../../components/Header";
import {
  Flex,
  Button,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Prices = () => {
  const [showTable, setShowTable] = useState(false);

  return (
    <Flex flexDir="column">
      <Header />
      <Button onClick={() => setShowTable(!showTable)}>
        Mostrar tabela com preços
      </Button>
      {showTable && (
        <TableContainer w="800px" m="0 auto">
          <Table mt="50px" size="lg">
            <Thead>
              <Tr>
                <Th>Plan</Th>
                <Th>Descriptions</Th>
                <Th>Prices</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Begginer</Td>
                <Td>
                  Transcrição de Áudio Assíncrono - 120 minutos (R$0,20 / minuto
                  excedente) Transcrição de Áudio em tempo real - 90 minutos
                  (R$0,40 / minuto excedente) Identificação de Idiomas em áudios
                  - 200 minutos (R$0,05 / minuto excedente) Análise de
                  sentimento a partir do áudio (áudio pré-gravado) - 120 minutos
                  (R$0,40 / minuto excedente)
                </Td>
                <Td>R$29 por mês ou R$328 para uma compra anual</Td>
              </Tr>
              <Tr>
                <Td>Business</Td>
                <Td>
                  Transcrição de Áudio Assíncrono - 200 minutos (R$0,15 / minuto
                  excedente) Transcrição de Áudio em tempo real - 120 minutos
                  (R$0,40 / minuto excedente) Identificação de Idiomas em áudios
                  - 500 minutos (R$0,03 / minuto excedente) Análise de
                  sentimento a partir do áudio (áudio pré-gravado) - 200 minutos
                  (R$0,35 / minuto excedente)
                </Td>
                <Td>R$44 por mês ou R$499 para uma compra anual.</Td>
              </Tr>
              <Tr>
                <Td>Enterprise</Td>
                <Td>
                  Preços especiais para grandes volumes. Prioridade no suporte
                  técnico. Gestor de conta dedicado.
                </Td>
                <Td>
                  <Text>
                    Preço sob consulta
                    <Link
                      to="/contact"
                      style={{ color: "#00f", textDecor: "underline" }}
                    >
                      , entre em contato conosco.
                    </Link>
                  </Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Flex>
  );
};
