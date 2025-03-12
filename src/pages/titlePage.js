import { Card, Col, Container, Row } from "react-bootstrap";
import Resume from "./resumeNickGarza.pdf";
import React, { useState, useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Me from "../photos/nick.jpg";

export default function TitlePage() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 50,
            duration: 0.1,
            direction: "bottom",
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFC5",
        },
        move: {
          direction: "bottom",
          enable: true,
          outModes: "out",
          random: false,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        wobble: {
          enable: true,
          distance: 10,
          speed: 10,
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );
  return (
    <Container>
      <br></br>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <Row>
        <Col xs={12} md={8}>
          <Card style={{ padding: "50px" }}>
            <Card.Body>
              <p class="display-4">
                <span
                  class="display-1"
                  style={{
                    fontFamily: "Roboto Mono",
                    fontWeight: "700",
                    color: "#779ecb",
                  }}
                >
                  NICHOLAS GARZA{" "}
                </span>
                <span>Software Engineer at Microsoft</span>
                <br></br>
                <br></br>
                <br></br>
              </p>
              <p
                style={{
                  fontFamily: "monospace",
                }}
              ></p>
              <span> graphics programming // back-end development </span>
              <br></br>
              <Card.Link href="https://github.com/nickgarza">github</Card.Link>
              <Card.Link href="https://www.linkedin.com/in/nicholaspgarza/">
                linkedin
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <img
            src={Me}
            alt="thuyvy"
            style={{
              maxWidth: "100%",
              borderRadius: "100%",
              opacity: "85%",
              padding: "25px",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}
