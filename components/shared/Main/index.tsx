import React from 'react'
import Header from '../Header/Storefront'

const Main: React.FC = ({ children }) => {
  return (
    <div className="d-flex flex-column sticky-footer-wrapper">
      <Header/>

      <div className="container flex-fill">
        { children }
      </div>
    </div>
  )
}

export default Main