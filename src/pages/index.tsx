import { Flex,  Button, FormLabel, Stack, FormControl } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function Home() {
  return (
    <Flex width='100vw' height='100vh' alignItems='center' justifyContent='center'>
      <Flex
        as='form'
        width='100%'
        maxWidth={360}
        backgroundColor='gray.800'
        p='8'
        borderRadius={8}
        flexDirection='column'>
        <Stack spacing='4'>
          <Input name='email' label='E-mail' type='email' />
          <FormControl>
            <FormLabel htmlFor='email'>E-mail</FormLabel>
            {/* <Input
              id='email'
              name='email'
              type='email'
              size='lg'
              backgroundColor='gray.900'
              focusBorderColor='pink.500'
              variant='filled'
              _hover={{
                backgroundColor: 'gray.900'
              }}
            /> */}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='password' >Senha</FormLabel>
            {/* <Input
              name='password'
              type='password'
              id='password'
              size='lg'
              backgroundColor='gray.900'
              focusBorderColor='pink.500'
              variant='filled'
              _hover={{
                backgroundColor: 'gray.900'
              }}
            /> */}
          </FormControl>
          <Button type='submit' marginTop='6' colorScheme='pink' size='lg'>Entrar</Button>
        </Stack>
      </Flex>
    </Flex>
  )
}
