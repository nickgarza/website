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
                    <h1 class="display-3">connect with me!</h1>
                    <p class="lead"> everywhere to find me, reach me @</p>
                  </Col>
                  <Col>
                    <Card.Link href="mailto:thuyvynguy@gmail.com">
                      email
                    </Card.Link>
                    <Card.Link href="https://github.com/thuyvyng">
                      github @ thuyvyng
                    </Card.Link>
                    <Card.Link href="https://www.linkedin.com/in/thuyvyng/">
                      linkedin @ thuyvyng
                    </Card.Link>
                    <Card.Link href="https://www.instagram.com/thuyvyng">
                      instagram @ thuyvng
                    </Card.Link>
                    <Card.Link href="https://www.goodreads.com/thuyvyng">
                      goodreads @ thuyvyng
                    </Card.Link>
                    <Card.Link href="https://open.spotify.com/user/tweetynguy">
                      spotify @ tweetynguy
                    </Card.Link>
                    <Card.Link href="https://letterboxd.com/thuyvyng/">
                      letterboxd @ thuyvyng
                    </Card.Link>
                    <Card.Link href="https://www.duolingo.com/profile/ThuyVyNg">
                      duolingo @ thuyvyng
                    </Card.Link>
                    <Card.Link href="https://www.yelp.com/user_details?userid=egY9mB8HEWJOcUCqfYsr_g">
                      yelp
                    </Card.Link>
                    <Card.Link href="https://www.strava.com/athletes/142466934">
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
