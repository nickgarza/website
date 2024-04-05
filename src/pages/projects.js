import { Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/navbar";
import ursaPoster from "./poster.jpg";
import intern from "./thuyvynguyen_internpresentation.pdf";
import viva from "./viva.pdf";

export default function Projects() {
  return (
    <>
      <Navigation />
      <Container>
        <h1 class="display-2" style={{ textAlign: "right" }}>
          <br></br>
          projects & <br></br> publications
        </h1>
        <Row data-masonry={{ percentPosition: "true" }}>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>UnPaws the Music</Card.Title>
                <Card.Text>
                  Web application to learn and interact with your Spotify music
                  taste with statistics and cat visualizations.
                </Card.Text>
                <Card.Text class="techStack">
                  React, Redux, Spotify Web API
                </Card.Text>
                <Card.Link href="https://unpawsthemusic.vercel.app/">
                  website
                </Card.Link>
                <Card.Link href="https://github.com/thuyvyng/spotifyInteractive">
                  github
                </Card.Link>
                <Card.Link href="https://open.spotify.com/playlist/4YBShIMxSyiNX4M9q6dcxc">
                  spotify playlist
                </Card.Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                  Interactive Visualization for Artificial Intelligence
                  Education
                </Card.Title>
                <Card.Subtitle>Senior Capstone</Card.Subtitle>
                <br></br>
                <Card.Text>
                  Interactive and educative tools for users to learn about
                  machine learning classification algorithms
                </Card.Text>
                <Card.Text class="techStack">
                  Jupyter Notebooks, D3.js, React, Tensorflow, Python
                </Card.Text>
                <Card.Link href="https://github.com/laurajjiang/capstone_ai_education">
                  github
                </Card.Link>
              </Card.Body>
            </Card>{" "}
            <Card>
              <Card.Body>
                <Card.Title>What would Cher wear?</Card.Title>
                <Card.Text>
                  Weather application to help you decide what to wear based on
                  the weather. Clueless inspired.
                </Card.Text>
                <Card.Text class="techStack">
                  React, OpenWeatherMap API
                </Card.Text>
                <Card.Link href="https://whatwouldcherwear.vercel.app/search">
                  website
                </Card.Link>
                <Card.Link href="https://github.com/thuyvyng/weatherApp">
                  github
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  VIVA: Visual Exploration and Analysis of Videos with
                  Interactive Annotation
                </Card.Title>
                <Card.Subtitle>
                  ACM International Conference on Intelligent User Interfaces
                  2023
                </Card.Subtitle>
                <br></br>
                <Card.Text>
                  A novel interactive tool for visually exploring long videos
                  and searching for specific moments
                </Card.Text>
                <Card.Text class="techStack">Svelte, Python, Flask</Card.Text>
                <Card.Link href="https://dl.acm.org/doi/10.1145/3581754.3584160">
                  doi
                </Card.Link>
                <Card.Link href={viva}>pdf</Card.Link>
                <Card.Link href="https://ruangroc.github.io/static/VIVA.pdf">
                  poster
                </Card.Link>
                <Card.Link href="https://events.engineering.oregonstate.edu/expo2021/project/interfaces-video-search-and-browsing">
                  project page
                </Card.Link>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>SheepDog</Card.Title>
                <Card.Subtitle>Oracle Internship Project 2020</Card.Subtitle>
                <br></br>
                <Card.Text>
                  Slack application to notify users of status changes on their
                  automated deployments within Oracle Cloud Infrastructure's
                  deployment system.
                </Card.Text>
                <Card.Text class="techStack">
                  Java, SQL, Slack API, React, Guava's Eventbus
                </Card.Text>
                <Card.Link href={intern}>presentation</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  Contrastive Identification of Covariate Shift in Image Data
                </Card.Title>
                <Card.Subtitle>
                  IEEE Visualization Conference Publication 2021
                </Card.Subtitle>
                <br></br>
                <Card.Text>
                  Interface that facilitates the comparison of the local
                  distributions of training and test data
                </Card.Text>
                <Card.Text class="techStack">D3.js, Python</Card.Text>
                <Card.Link
                  href="https://minsuk.com/papers/shiftidentification-vis21.pdf"
                  class="card-link"
                >
                  pdf
                </Card.Link>
                <Card.Link href="https://www.youtube.com/watch?v=hotE2hDXKfQ">
                  video
                </Card.Link>
                <Card.Link href="https://ieeexplore.ieee.org/document/9623289">
                  doi
                </Card.Link>
                <Card.Link href="https://github.com/mattolson93/dataset-shifts">
                  github
                </Card.Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>ThuyVy Travels!</Card.Title>
                <Card.Subtitle>Globe To Track ThuyVy's Travels</Card.Subtitle>
                <br></br>
                <Card.Text>
                  3D Globe Visualization that shows where I've traveled, will
                  also update to showcase my travel photos from these locations.
                </Card.Text>
                <Card.Text class="techStack">Globe Gl, React</Card.Text>
                <Card.Link href={"/travel"}>link</Card.Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                  Visualizing Environmental Disasters with Virtual Reality
                </Card.Title>
                <Card.Subtitle>
                  URSA Engage Research Project & Award Winner
                </Card.Subtitle>
                <br></br>
                <Card.Text>
                  Modeled real-life terrain in vr and analyzed potential effects
                  of climate change by simulating environmental catastrophes.
                </Card.Text>
                <Card.Text class="techStack">
                  Unreal Engine, CityEngine
                </Card.Text>
                <Card.Link href={ursaPoster}>presentation</Card.Link>
              </Card.Body>
            </Card>
            <br></br>
            <br></br>
          </Col>
        </Row>
      </Container>
    </>
  );
}
