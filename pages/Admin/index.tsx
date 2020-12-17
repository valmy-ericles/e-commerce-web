import React from 'react'
import withAuthAdmin from '../../components/withAuthAdmin'

const Home: React.FC = () => {
  return <h1>Você acessou o painel!</h1>
}

export default withAuthAdmin(Home)