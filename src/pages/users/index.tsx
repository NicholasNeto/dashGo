import React from "react";
import { Box, Button, Checkbox, Flex, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue, Spinner } from "@chakra-ui/react";
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { CustomizedTitle } from "../../components/Title";
import { useUsers } from "../../services/hooks/useUsers";

export default function UserList() {
    const { data, isLoading, isFetching, error } = useUsers();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Box>
            <Header />
            <Flex width="100%" my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />
                <Box flex='1' borderRadius={8} background='gray.800' padding='8'>
                    <Flex marginBottom='8' justify='space-between' align='center'>
                        <CustomizedTitle>
                            Usuários
                            {!isLoading && isFetching && <Spinner size='sm' color='gray.500' ml='4' />}
                        </CustomizedTitle>
                        <Link href="/users/create" passHref>
                            <Button
                                as='a'
                                size='sm'
                                fontSize='sm'
                                colorScheme='pink'
                                leftIcon={
                                    <Icon as={RiAddLine} fontSize='20' />}
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>
                    {
                        isLoading ? (
                            <Flex justify='center'>
                                <Spinner />
                            </Flex>
                        ) : error ? (
                            <Flex justify='center'>
                                <Text>Falha ao obter os dados dos usuários</Text>
                            </Flex>
                        ) : (
                            <>
                                <Table colorScheme='whiteAlpha'>
                                    <Thead>
                                        <Tr>
                                            <Th px={['4', '4', '6']} color='gray.300' width='8'>
                                                <Checkbox colorScheme='pink' />
                                            </Th>
                                            <Th> Usuário </Th>
                                            {isWideVersion && <Th>Data de cadastro</Th>}
                                            <Th width='8'></Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {data.map(user => {
                                            return (
                                                <Tr key={user.id}>
                                                    <Td px={['4', '4', '6']}>
                                                        <Checkbox colorScheme='pink' />
                                                    </Td>
                                                    <Td>
                                                        <Box>
                                                            <Text fontWeight='bold'>{user.name}</Text>
                                                            <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                                                        </Box>
                                                    </Td>
                                                    {isWideVersion &&
                                                        <Td>
                                                            {user.createdAt}
                                                        </Td>}
                                                    <Td>
                                                        {isWideVersion && <Button
                                                            as='a'
                                                            size='sm'
                                                            fontSize='sm'
                                                            colorScheme='purple'
                                                            leftIcon={<Icon
                                                                as={RiPencilLine}
                                                                fontSize='16' />}> Editar</Button>}
                                                    </Td>
                                                </Tr>
                                            )
                                        })}
                                    </Tbody>
                                </Table>
                                <Pagination
                                    totalCountOfRegisters={200}
                                    currentPage={5}
                                    onPageChanged={() => {}}
                                />
                            </>
                        )}
                </Box>
            </Flex>
        </Box>
    )
}