import { Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/navbar";

export default function About() {
  return (
    <>
      <Navigation />
      <Container>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col>
            {" "}
            <h1 class="display-2 text-right" style={{ textAlign: "right" }}>
              About Me
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            {/* <img
              src={Me}
              alt="nick"
              style={{
                maxWidth: "100%",
                borderRadius: "50%",
                opacity: "90%",
                padding: "5px",
              }}
            /> */}
          </Col>
          <Col>
            <Card>
              <p class="lead">
                Based in Seattle, WA, I'm a software engineer on the Xbox Graphics team at Microsoft.
                I graduated from Johns Hopkins University in 2020 with a B.S. in Computer Science and
                a B.S in Biomedical Engineering. I love high performance computing, graphics programming,
                and intuitive design. In my free time, I enjoy gaming, making music, trying new recipes, and traveling.
              </p>
              <p> random things to know about me</p>
              <ul>
                <li>
                  
                </li>
                <li>
                  {" "}
                  <ul>
                    <li>
                      {" "}
                      
                    </li>
                    <li></li>
                  </ul>
                </li>
                <li>
                  {" "}
                </li>
                <li>
                  {" "}

                </li>
                <li> </li>
                <li>
                </li>
              </ul>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col xs={12}>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <h1 class="display-3">Links</h1>
                  </Col>
                  <Col>
                    <Card.Link href="mailto:nicholaspgarza@gmail.com">
                      email
                    </Card.Link>
                    <Card.Link href="https://github.com/nickgarza">
                      github @ nickgarza
                    </Card.Link>
                    <Card.Link href="https://www.linkedin.com/in/nicholaspgarza/">
                      linkedin
                    </Card.Link>
                    <Card.Link href="https://open.spotify.com/user/12181205357?si=7b34b18c35144111">
                      spotify
                    </Card.Link>
                    <Card.Link href="https://letterboxd.com/nickpgarza/">
                      letterboxd @ nickpgarza
                    </Card.Link>
                    <Card.Link href="hhttps://www.yelp.com/user_details?userid=-OF387yUbEMXG3elGFixFw">
                      yelp
                    </Card.Link>
                    <Card.Link href="https://www.strava.com/athletes/77617669">
                      strava
                    </Card.Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
