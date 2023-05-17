import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <footer>
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

        <style>{`
            footer {
                padding: 10px;
                width: 100%;
                height: 10vh;
                display: flex;
                justify-content: end;
                padding: 30px;
            }
            footer h1 {
                font-weight: 300;
                font-size: 14px;
            }
        `}</style>
    </footer>
  )
}

export default Menu