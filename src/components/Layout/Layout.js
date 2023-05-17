import React from 'react'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'

function Layout ({ children }) {
  return (
    <>
        <Menu/>
          <div className='main-container'>
          { children }
          </div>
        <Header/>

        <style jsx>{`
          .main-container {
            height: auto;
            min-height: 80vh;
            padding: 50px;
          }
        `}</style>
    </>
  )
}

export { Layout }