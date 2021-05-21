import { Box, Button, Stack } from "@chakra-ui/react"
import React from "react"

export function Pagination() {
    return (
        <Stack
            direction='row'
            marginTop='8'
            spacing='6'
            justifyContent='space-between'
            aling='center'
        >

            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>

            <Stack direction='row' spacing='2'>
                <Button
                    size='sm'
                    fontSize='xs'
                    width='4'
                    colorScheme='pink'
                    disabled
                    _disabled={{
                        backgroundColor: 'pink.500',
                        cursor: 'default',
                    }}
                >
                    1
            </Button>
                <Button
                    size='sm'
                    fontSize='xs'
                    width='4'
                    backgroundColor='gray.700'
                    _hover={{
                        backgroundColor: 'gray.500'
                    }}
                >
                    2
            </Button>
                <Button
                    size='sm'
                    fontSize='xs'
                    width='4'
                    backgroundColor='gray.700'
                    _hover={{
                        backgroundColor: 'gray.500'
                    }}
                >
                    2
            </Button>
            </Stack>



        </Stack>
    )
}