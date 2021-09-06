import React, { useState } from "react";
import { Box, Button, Checkbox, Flex, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue, Spinner, Link } from "@chakra-ui/react";
import NextLink from 'next/link'
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { CustomizedTitle } from "../../components/Title";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";

export default function UserList() {
    const [page, setPage] = useState(1)
    const { data, isLoading, isFetching, error } = useUsers(page);


    async function handlePrefetchUser(userId: number) {
        await queryClient.prefetchQuery(['user', userId], async () => {
            const response = await api.get(`user/${userId}`)
            return response.data;
        }, {
            staleTime: 1000 * 60 * 10 // 10 minutos não vai precisar se recarregado
        })
    }

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
                        <NextLink href="/users/create" passHref>
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
                        </NextLink>
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
                                        {data.users.map(user => {
                                            return (
                                                <Tr key={user.id}>
                                                    <Td px={['4', '4', '6']}>
                                                        <Checkbox colorScheme='pink' />
                                                    </Td>
                                                    <Td>
                                                        <Box>
                                                            <Link color='purple.400' onMouseEnter={() => handlePrefetchUser(user.id)}>
                                                                <Text fontWeight='bold'>{user.name}</Text>
                                                            </Link>

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
                                    totalCountOfRegisters={data.totalCount}
                                    currentPage={page}
                                    onPageChanged={setPage}
                                />
                            </>
                        )}
                </Box>
            </Flex>
        </Box>
    )
}