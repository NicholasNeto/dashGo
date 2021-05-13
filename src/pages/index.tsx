import { Flex,  Button, Stack } from '@chakra-ui/react'
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
          <Input name='password' label='Senha' type='password' />
          <Button type='submit' marginTop='6' colorScheme='pink' size='lg'>Entrar</Button>
        </Stack>
      </Flex>
    </Flex>
  )
}
