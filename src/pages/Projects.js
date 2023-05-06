import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const juego = 'https://i.postimg.cc/52mW0dJR/13.png'
const arch = 'https://i.postimg.cc/BbjVckd4/14.png'
const quotes = 'https://i.postimg.cc/W4tg3VrN/15.png'

const Projects = () => {
  const pro = [

    {
      name: "Proyecto-Marvel",
      link: "https://github.com/EdOliveros/Practica-Universe-Marvel",
      img: juego,
    },

    {
      name: "Eukariae",
      link: "https://github.com/EdOliveros/Eukariae",
      img: arch,
    },

    {
      name: "Quotes",
      link: "https://github.com/EdOliveros/Practica-Motivational-Quotes",
      img: quotes,
    },

    {
      name: "Portfolio",
      link: "https://github.com/EdOliveros/portfolio",
      img: quotes,
    }
  
  ];
  const stilo = {
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
                        <Image style={stilo} width={100} height={100} src={item.img} alt="img"></Image>
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
            display: flex;
            flex-wrap: wrap;
            margin-top: 100px;
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