import { Flex, Box, Text, Avatar } from "@chakra-ui/react"

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align='center'>
            {showProfileData && (
                <Box mr='4' textAlign='right'>
                    <Text>Nicholas Neto</Text>
                    <Text
                        color='gray.300'
                        fontSize='small'>
                        nicholasneto@gmail.com
                        </Text>
                </Box>
            )}
            <Avatar size='md' name='Nicholas Neto' src='https://github.com/nicholasneto.png' />
        </Flex>
    )
}