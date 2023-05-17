import React from 'react';
import Image from 'next/image';
const ocho = 'https://i.postimg.cc/5tvvv3PT/8.png'
const siete = 'https://i.postimg.cc/tTkzZkJy/7.png'
const diez = 'https://i.postimg.cc/BvG5mk14/10.png'
const once = 'https://i.postimg.cc/G2Xkhpgm/11.png'
const cinco = 'https://i.postimg.cc/vmM9rnpm/5.png'
const seis = 'https://i.postimg.cc/x1VbQHjP/6.png'
const nueve = 'https://i.postimg.cc/QVGVXGDM/9.png'

const stilo = {
  marginBottom: '15px',
}

const Skills = () => {
  return (
    <div>
      <div className="skills-container">
        <div className="vertical">
            <figure>
                <Image style={stilo} width={60} height={35} src={ocho}></Image>
            </figure>
            <figure>
                <Image style={stilo} width={60} height={35} src={siete} alt="logo"></Image>
            </figure>
            <figure>
                <Image style={stilo} width={60} height={35} src={diez} alt="logo"></Image>
            </figure>
            <figure>
                <Image style={stilo} width={60} height={35} src={once} alt="logo"></Image>
            </figure>
        </div>
        <div className="horizontal">
            <figure>
                <Image style={stilo} width={60} height={35} src={cinco} alt="logo"></Image>
            </figure>
            <figure>
                <Image style={stilo} width={60} height={35} src={seis} alt="logo"></Image>
            </figure>
            <figure>
                <Image style={stilo} width={60} height={35} src={nueve} alt="logo"></Image>
            </figure>
        </div>
      </div>

      <style jsx>{`
      .etiquetas {
        color: #44687B;
      }
      .skills-container {
            margin: 100px 0 0 0;
      }
      .next {
          width: 80px;
      }
      .vertical {
          display: flex;
          flex-direction: column;
      }
      .horizontal {
          display: flex;
          justify-content: start;
          align-items: center;
          margin-left: 14px;
          width: 270px;
      }
      `}</style>
    </div>
  )
}

export default Skills