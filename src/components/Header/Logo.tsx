import { Text } from "@chakra-ui/react";

export function Logo() {
    return (
        <Text
            fontSize={['2xl', '3xl']} // Ele tem breackpoint, começa no mobile este valor até o proximo
            fontWeight='bold'
            // latterSpacing='tight'
            width='64'
        >
            dashgo
            <Text as='span' color='pink.500' marginLeft='1'>.</Text>
        </Text>
    )
}