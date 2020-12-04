import React from 'react'
import Main from '../components/shared/Main'
import { useRouter } from 'next/router'


const Home: React.FC = () => {
  const router = useRouter();
  
  return (
    <Main>
      <button onClick={() => router.push('Auth/Login')}>
        Login
      </button>
    </Main>
  )
}

export default Home;
