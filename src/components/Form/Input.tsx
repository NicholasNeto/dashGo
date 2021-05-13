import { FormControl, FormLabel, Input as ChakraInput, InputProps as chakraInputProps } from '@chakra-ui/react'


interface InputPropsType extends chakraInputProps {
    name: string;
    label?: string
}


export function Input({ name, label, ...rest }: InputPropsType) {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name} >{label}</FormLabel>}
            <ChakraInput
                name={name}
                id={name}
                {...rest}
                size='lg'
                backgroundColor='gray.900'
                focusBorderColor='pink.500'
                variant='filled'
                _hover={{
                    backgroundColor: 'gray.900'
                }}
            />
        </FormControl>
    )
}