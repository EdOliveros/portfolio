import React from 'react'
import juego from '@public/13.png'
import arch from '@public/14.png'
import quotes from '@public/15.png'
import Link from 'next/link'
import Image from 'next/image'

const Projects = () => {
  const pro = [

    {
      name: "Juego-Canva",
      link: "https://edoliveros.github.io/curso-taller-practico-javascript-juego/",
      img: juego,
    },

    {
      name: "Arch",
      link: "https://edoliveros.github.io/Arch/",
      img: arch,
    },

    {
      name: "Quotes",
      link: "https://edoliveros.github.io/motivationalQuotes/index.html",
      img: quotes,
    }
  
  ];
  const stilo = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  };

  return (
    <div>
      <div className="projects-container">
        
         { pro.map(item => 
            item.innerHTML = 
              <Link style={{
                textDecoration: "none",
                color: "#44687B",
              }} href={item.link}>
                <div className="project">
                    <figure>
                        <Image style={stilo} src={item.img} alt=""></Image>
                    </figure>
                    <div className="info">
                        <p className="etiqueta">&lt;h6&gt;</p>
                        <p className="titulo">{item.name}</p>
                        <p className="etiqueta">&lt;/h6&gt;</p>
                    </div>
                </div>
              </Link>
          )}
      </div>

      <style jsx>{`

        .projects-container {
            width: 100%;
            padding: 0 90px;
            position: absolute;
            bottom: 220px;
            display: flex;
            flex-wrap: wrap;
        }
        .etiquetas {
          color: #44687B;
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

        @media (max-width: 600px) {
          // .projects-container {
          //   justify-content: center;
          //   height: 100vh;
          //   width: 100%;
          //   margin: 60px 0 0 0;
          // }
        }

      `}</style>
    </div>
  )
}

export default Projects