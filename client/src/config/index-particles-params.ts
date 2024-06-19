import { } from '@tsparticles/react'

const particlesParams = {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 1,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: true
            }
        },
        size: {
            value: 2,
            random: true
        },
        line_linked: {
            enable: false
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none" as const,
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        },
        retina_detect: true
    }
}

export default particlesParams;