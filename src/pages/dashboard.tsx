import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
    return (

        <Flex direction='column' height='100vh' >
            <Header />

            <Flex
                width='100%'
                my='6'
                maxWidth={1480}
                mx='auto'
                px='6'
            >
                <Sidebar />

                <SimpleGrid flex='1' gap='4' minChildWidth='320px' align='flex-start'>
                    <Box p='8' background='gray.800' borderRadius={8} paddingBottom='4' >
                        <Text fontSize='lg' marginBottom='4'>Inscritos da semana</Text>
                    </Box>

                </SimpleGrid>
            </Flex>
        </Flex>

    )
}