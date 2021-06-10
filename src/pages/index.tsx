import { Flex, Button, Stack } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }

  return (
    <Flex width='100vw' height='100vh' alignItems='center' justifyContent='center'>
      <Flex
        as='form'
        width='100%'
        maxWidth={360}
        backgroundColor='gray.800'
        p='8'
        borderRadius={8}
        flexDirection='column'
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>
          <Input name='email' label='E-mail' type='email' {...register('email')} />
          <Input name='password' label='Senha' type='password' {...register('password')} />
          <Button
            type='submit'
            marginTop='6'
            colorScheme='pink'
            size='lg'
            isLoading={formState.isSubmitting}
          >
            Entrar
            </Button>
        </Stack>
      </Flex>
    </Flex>
  )
}
