import React from 'react'
import Image from 'next/image'
import logo from "@public/12.png"

const About = () => {
  return (
    <div>
        <div className="home">
            <figure>
                <Image style={{
                    width: '150px',
                    height: 'auto',
                }} className="img" src={logo} alt=""></Image>
            </figure>
            <div className="info-container">
                <div>
                    <p className="etiquetas">&lt;h4&gt;</p>
                    <p className="info">I'm ED</p>
                    <p className="etiquetas">&lt;/h4&gt;</p>
                </div>
                <div>
                    <p className="etiquetas">&lt;p&gt;</p>
                    <p  className="info">I have a background in design, illustration, and communications, and I am currently studying full-stack development with a focus on HTML, CSS, JS, React, and Next. My unique skillset allows me to apply technical development skills while also keeping the UX/UI perspective in mind. I am skilled at conveying technical information in a way that is easy to understand for users of all levels.</p>
                    <p className="etiquetas">&lt;/p&gt;</p>
                </div>
            </div>
        </div>

        <style jsx>{`
        .home {
            display: flex;
            position: absolute;
            bottom: 100px;
            margin-left: 50px;
        }
        .img {
            width: 150px;
            height: auto;
        }
        .info-container {
            width: 350px;
            margin-left: 10px;
        }
        .info-container p {
            font-size: 15px;
            margin-bottom: 5px;
        }
        .info {
            margin-left: 20px;
        }
        .etiquetas {
            color: #44687B;
        }
        @media (max-width: 600px) {
            .home {
                margin: 0px 20px;
            }
            .info {
                width: 200px;
            }
        }
        `}</style>
    </div>
  )
}

export default About