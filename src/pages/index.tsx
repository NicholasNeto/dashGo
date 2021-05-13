import { Flex, Input, Button, FormLabel, Stack, FormControl } from '@chakra-ui/react'

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
          <FormControl>
            <FormLabel id='email'>E-mail</FormLabel>
            <Input
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
            />
          </FormControl>
          <FormControl>
            <FormLabel id='password' >Senha</FormLabel>
            <Input
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
            />
          </FormControl>
          <Button type='submit' marginTop='6' colorScheme='pink' size='lg'>Entrar</Button>
        </Stack>
      </Flex>
    </Flex>
  )
}
