import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <footer>
        <style>{`
            footer {
                position: fixed;
                top: 0;
                padding: 10px;
                width: 100%;
                height: 60px;
                display: flex;
                justify-content: end;
                padding: 30px;
            }
            footer h1 {
                font-weight: 300;
                font-size: 14px;
            }
            @media (max-width: 600px) {
              // footer {
              //   height: auto;
              //   padding: 0;
              // }
            }
        `}</style>
        <h1>
        <Link style={{
          fontWeight: '300',
          fontSize: '14px',
          textDecoration: 'none',
          color: '#DBDBDB',
        }} href='/' >HOME |</Link>
        <Link style={{
          fontWeight: '300',
          fontSize: '14px',
          textDecoration: 'none',
          color: '#DBDBDB',
        }} href='/Projects' > PROJECTS |</Link>
        <Link style={{
          fontWeight: '300',
          fontSize: '14px',
          textDecoration: 'none',
          color: '#DBDBDB',
        }} href='/Skills' > SKILLS |</Link>
        <Link style={{
          fontWeight: '300',
          fontSize: '14px',
          textDecoration: 'none',
          color: '#DBDBDB',
        }} href='/Contact' > CONTACT</Link>        
        
        </h1>
    </footer>
  )
}

export default Menu