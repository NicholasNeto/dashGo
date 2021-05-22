import { Box, Divider, Flex, Heading, SimpleGrid, VStack  } from "@chakra-ui/react";
import React from "react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
    return (
        <Box>
            <Header />
            <Flex width="100%" my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />
                <Box flex='1' borderRadius={8} background='gray.800' padding='8'>
                    <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>
                    <Divider my='6' borderColor='gary.700' />
                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px' spacing='8' width='100%'>
                            <Input name='name' label='Nome completo' />
                            <Input name='email' type='email' label='E-mail' />
                        </SimpleGrid>
                    </VStack>
                </Box>
            </Flex>
        </Box>
    )
}