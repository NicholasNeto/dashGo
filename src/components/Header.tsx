import { Flex, Text } from '@chakra-ui/react'


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

        </Flex>
    )
}