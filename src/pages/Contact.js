import React from 'react'

const Contact = () => {
  return (
    <>
        <div className="p-container">
            <p className="etiquetas">&lt;p&gt;</p>
            <p className="email">edgarolimoy98@gmail.com</p>
            <p className="etiquetas">&lt;/p&gt;</p>
        </div>

        <style jsx>{`
        .p-container {
            position: absolute;
            bottom: 100px;
            width: 300px;
            display: flex;
            flex-direction: column;
            margin-left: 50px;
            font-size: 14px;
        }
        .email {
            margin-left: 20px;
        }
        .etiquetas {
            color: #44687B;
        }
        `}</style>
    </>
  )
}

export default Contact