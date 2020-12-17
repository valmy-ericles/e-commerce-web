import React from 'react'
import Main from '../../../components/shared/Main'
import LoginForm from '../../../components/LoginForm'
import SignUpForm from '../../../components/SignUpForm'

const Login: React.FC = () => {
  return (
    <Main>
      <br/>
      <LoginForm titlePhrase="Acessar minha conta" buttonPhrase="ACESSAR" />
      <br/>
      <SignUpForm titlePhrase="Criar nova conta" buttonPhrase="CRIAR" />
      <br/>
    </Main>
  )
}

export default Login