import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FormControl, FormLabel, Input as ChakraInput, InputProps as chakraInputProps } from '@chakra-ui/react'


interface InputProps extends chakraInputProps {
    name: string;
    label?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest }, ref) =>  {
    return (
        <FormControl>
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
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)