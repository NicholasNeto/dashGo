import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FormControl, FormLabel, Input as ChakraInput, InputProps as chakraInputProps, FormErrorMessage } from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'

interface InputProps extends chakraInputProps {
    name: string;
    label?: string
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={name} >{label}</FormLabel>}
            <ChakraInput
                name={name}
                id={name}
                size='lg'
                backgroundColor='gray.900'
                focusBorderColor='pink.500'
                variant='filled'
                _hover={{
                    backgroundColor: 'gray.900'
                }}
                {...rest}
                ref={ref}
            />
            {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)