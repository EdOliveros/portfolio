import React from "react";

function Loading() {

    React.useEffect(() => {
        const particlesContainer = document.querySelector('.particles');
    
        for (let i = 0; i < 1000; i++) {
          const particle = document.createElement('div');
          particle.classList.add('particle');
          particle.style.left = `${Math.random() * 200}%`;
          particle.style.top = `${Math.random() * 200}%`;
          particle.style.transform = `translateZ(${Math.random() * -2000}px)`;
          particlesContainer.appendChild(particle);
        }
      }, []);
    
      return (
        <div className="container">
          <div className="particles"></div>
          <style>{`
            .container {
                perspective: 800px;
                margin: 0;
                padding: 0;
                overflow: hidden;
                width: 100%;
                height: 100vh;
                background-color:  #1B1B1B;
                border-radius: 50%;
              }
              
              .particles {
                position: absolute;
                width: 100%;
                height: 100%;
                transform-style: preserve-3d;
                animation: travel 15s infinite linear;
              }
              
              .particle {
                position: absolute;
                width: 3px;
                height: 3px;
                background-color: #0f0;
                opacity: 0.8;
              }
              
              @keyframes travel {
                0% {
                  transform: translateZ(-2800px);
                }
                100% {
                  transform: translateZ(3200px);
                }
              }
              
          `}</style>
        </div>
      );
}

export { Loading }