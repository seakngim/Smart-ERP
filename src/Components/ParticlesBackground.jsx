import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    // Use slim version (compatible with installed package)
    await loadSlim(engine);
  };

  const particlesOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    background: {
      color: "#dddddd",
    },
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        outMode: "bounce",
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 5,
      },
      opacity: {
        value: 1,
      },
    },
  };

  return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />;
};

export default ParticlesBackground;