import React from 'react';
import Image from 'next/image';
import ocho from '@public/8.png'
import siete from '@public/7.png'
import diez from '@public/10.png'
import once from '@public/11.png'
import cinco from '@public/5.png'
import seis from '@public/6.png'
import nueve from '@public/9.png'

const stilo = {
  width: '60px',
  height: 'auto',
  marginBottom: '15px',
}

const Skills = () => {
  return (
    <div>
      <div className="skills-container">
        <div className="vertical">
            <figure>
                <Image style={stilo} src={ocho}></Image>
            </figure>
            <figure>
                <Image style={stilo} src={siete} alt="logo"></Image>
            </figure>
            <figure>
                <Image style={stilo}  src={diez} alt="logo"></Image>
            </figure>
            <figure>
                <Image style={stilo}  src={once} alt="logo"></Image>
            </figure>
        </div>
        <div className="horizontal">
            <figure>
                <Image style={stilo}  src={cinco} alt="logo"></Image>
            </figure>
            <figure>
                <Image style={stilo}  src={seis} alt="logo"></Image>
            </figure>
            <figure>
                <Image style={stilo}  src={nueve} alt="logo"></Image>
            </figure>
        </div>
      </div>

      <style jsx>{`
      .etiquetas {
        color: #44687B;
      }
      .skills-container {
          position: absolute;
          bottom: 110px;
          margin-left: 80px;
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