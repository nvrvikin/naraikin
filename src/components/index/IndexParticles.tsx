import { useState, useEffect } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from "@tsparticles/slim";
import particlesParams from '../../config/index-particles-params';

function IndexParticles() {
  const [init, setItit] = useState(false)

  useEffect(()=> {
    initParticlesEngine(async (engine) =>{
      await loadSlim(engine)
    }).then(() => {
      setItit(true)
    })
  }, [])

  /*
  const particlesLoaded = (container: any) => {
    console.log(container)
  }
  */

  return (
    <>
      { 
        init &&
        <Particles
          className="particles-overlay"
          id="tsparticles"
          options={{

            
            particles: particlesParams.particles,
          }}
          
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            background: "transparent",
            zIndex: 1,
            pointerEvents: "none"
          }}
            />
      }
    </>
  )
}

IndexParticles.propTypes = {}

export default IndexParticles
