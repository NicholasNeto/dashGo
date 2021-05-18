import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        }, 
        categories: [
            '2021-05-01T00:00:00.000Z',
            '2021-05-02T00:00:00.000Z',
            '2021-05-03T00:00:00.000Z',
            '2021-05-04T00:00:00.000Z',
            '2021-05-05T00:00:00.000Z',
            '2021-05-06T00:00:00.000Z',
            '2021-05-07T00:00:00.000Z',
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        },
    }


}

const series = [
    { name: 'series1', data: [230, 400, 140, 200, 150, 489, 300] }
]


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
                        <Chart type='area' height={160} options={options} series={series} />
                    </Box>
                    <Box p='8' background='gray.800' borderRadius={8} paddingBottom='4' >
                        <Text fontSize='lg' marginBottom='4'>Taxa de abertura</Text>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>

    )
}