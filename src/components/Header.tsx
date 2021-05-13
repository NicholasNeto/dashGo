import { Flex, Text, Input, Icon } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'


export function Header() {
    return (
        <Flex
            as='header'
            width='100%'
            maxWidth={1480}
            height='20'
            mx='auto' // mx margin horizontal | left and right
            px='6' // px padding horizontal | left and right
            mt='4'
            align='center'
        >
            <Text
                fontSize='3xl'
                fontWeight='bold'
                latterSpacing='tight'
                width='64'
            >
                dashgo
                <Text as='span' color='pink.500' marginLeft='1'>.</Text>
            </Text>

            <Flex
                as='label'
                flex='1'
                py='4' // py padding vertical | top | bottom
                px='8' // px padding horizontal | left and right
                ml='6'
                maxWidth={400}
                alignSelf='center'
                color='gray.200'
                position='relative'
                background='gray.800'
                borderRadius='full'
            >
                <Input
                    color='gray.50'
                    variant='unstyled'
                    px='4'
                    mr='4'
                    placeholder='Buscar na plataforma'
                    _placeholder={{ color: 'gray.400' }}
                />

                <Icon as={RiSearchLine} fontSize='20' />
            </Flex>
        </Flex>
    )
}