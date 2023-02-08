import React from 'react'
import Image from 'next/image'
import logo from "../../../public/12.png"

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
                    <p  className="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt perspiciatis deserunt laudantium, quam error, libero veniam fugit cupiditate nobis quia aliquam laborum velit explicabo sit. Tempora vitae et consequatur nulla!</p>
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
                flex-direction: column;
                margin: 100px 20px;
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