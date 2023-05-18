import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@components/data'

const Projects = () => {

  const pro = projects
  
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
            margin: 50px 0;
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

        // @media (min-width: 600px) {
        //   .projects-container {
        //     margin: 100px 0 0 0;
        //   }
        // }

      `}</style>
    </div>
  )
}

export default Projects