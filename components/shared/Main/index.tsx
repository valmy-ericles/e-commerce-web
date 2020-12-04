import React from 'react'
import Header from '../Header/Storefront'
import Footer from '../Footer/Storefront'

const Main: React.FC = ({ children }) => {
  return (
    <div className="d-flex flex-column sticky-footer-wrapper">
      <Header/>

      <div className="container flex-fill">
        { children }
      </div>

      <Footer/>
    </div>
  )
}

export default Main