import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack  } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { CustomizedTitle } from "../../components/Title";

export default function CreateUser() {
    return (
        <Box>
            <Header />
            <Flex width="100%" my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />
                <Box flex='1' borderRadius={8} background='gray.800' padding={['6', '8']}>
                    <CustomizedTitle>Criar usuário</CustomizedTitle>
                    <Divider my='6' borderColor='gary.700' />
                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} width='100%'>
                            <Input name='name' label='Nome completo' />
                            <Input name='email' type='email' label='E-mail' />
                        </SimpleGrid>

                         <SimpleGrid minChildWidth='240px' spacing={['6', '8']} width='100%'>
                            <Input name='password'  type='password' label='Senha' />
                            <Input name='password_confirmation' type='password' label='Confirmação da senha'/>
                        </SimpleGrid>
                    </VStack>
                    <Flex marginTop='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href='/users' passHref>
                                <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
                            </Link>
                            <Button colorScheme='pink' >Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}