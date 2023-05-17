import React from 'react'

const Header = () => {
  return (
    <header className='header'>
        <h1 className='etiquetas h1'>&lt;h1&gt;</h1>
        <h1 className='h1'> ED OLIVEROS </h1>
        <h1 className='etiquetas h1'>&lt;/h1&gt;</h1>

        <style jsx>{`
        .header {
          width: 100%;
          height: 10vh;
          display: flex;
          align-items: end;
          padding: 30px;
        }
        .h1 {
          font-weight: 300;
        }
        .etiquetas {
          color: #44687B;
        }
        // @media(max-width: 400px) {
        //   .header {
        //       display: flex;
        //       flex-direction: column;
        //       align-items: start;
        //       width: 100%;
        //   }
        // }
        `}</style>
    </header>
  )
}

export default Header