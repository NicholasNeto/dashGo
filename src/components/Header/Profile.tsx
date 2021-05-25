import { Flex, Box, Text, Avatar } from "@chakra-ui/react"

export function Profile() {
    return (
        <Flex align='center'>
            <Box mr='4' textAlign='right'>
                <Text>Nicholas Neto</Text>
                <Text
                    color='gray.300'
                    fontSize='small'>
                    nicholasneto@gmail.com
                        </Text>
            </Box>

            <Avatar size='md' name='Nicholas Neto' src='https://github.com/nicholasneto.png' />
        </Flex>
    )
}