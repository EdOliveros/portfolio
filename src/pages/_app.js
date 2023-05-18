import { Layout } from "@components/Layout/Layout";
import { Loading } from "@components/Loading";
import './styles/global.css'
import React from "react";

export default function App({ Component, pageProps }) {
  
  const [load, setLoad] = React.useState(false)
  const [go, setGo] = React.useState(true)
  
  
  React.useEffect(() => {
    setTimeout(()=> {
      setLoad(false)
    }, 15000)
  }, [load])

  
  
  if(go) {
    return (
      <>
      <div className="cont">
        <button
          onClick={() => {
            setLoad(true)
            setGo(false)
          }}
        >Get in...</button>
      </div>

      <style>{`
        .cont {
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        button {
          padding: 20px;
          font-size: 30px;
          border: none;
          color: #44687B;
          background-color: transparent;
        }
        button:hover {
          cursor: pointer;
        }
      `}</style>
      </>
    );
  } else if(load) {
    
    return(
      <>
        <Loading />
        <audio autoPlay preload="auto" src="https://cdn.pixabay.com/audio/2022/11/09/audio_03983ae35a.mp3" id="audio"></audio>
      </>
    ) 
  } else if (!load) {
    return(
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
    
  } 
  
}
