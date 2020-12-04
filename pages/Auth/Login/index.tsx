import React from 'react'
import Main from '../../../components/shared/Main'
import LoginForm from '../../../components/LoginForm'

const Login: React.FC = () => {
  return (
    <Main>
      <LoginForm titlePhrase="Acessar minha conta" buttonPhrase="ACESSAR" />
    </Main>
  )
}

export default Login