import React from 'react'
import doce from '../../../public/12.png'
import Image from 'next/image'

const stilo = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
}

const Project = () => {
  return (
    <div>
        <div className="project">
            <figure>
                <Image style={stilo} src={doce} alt=""></Image>
            </figure>
            <div className="info">
                <p className="etiqueta">&lt;h6&gt;</p>
                <p className="titulo">Titulo</p>
                <p className="etiqueta">&lt;/h6&gt;</p>
            </div>
        </div>
       

        <style jsx>{`
         .etiquetas {
            color: #44687B;
        }
        .projects-container {
            width: 100%;
            padding: 0 90px;
            position: absolute;
            bottom: 220px;
            display: flex;
            flex-wrap: wrap;
        }
        .info p {
            font-size: 14px;
        }
        .etiqueta {
            color: #44687B;
        }
        .info .titulo {
            margin-left: 15px;
        }
        .project {
            margin-right: 50px;
        }
        `}</style>
    </div>
  )
}

export default Project