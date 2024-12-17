import { Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/navbar";
import Sparkle from "react-sparkle";

export default function Contact() {
  return (
    <>
      <Navigation />
      <Container>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col xs={12}>
            <Card style={{ padding: "50px" }}>
              <Sparkle />
              <Card.Body>
                <h1 class="display-2"> connect with me!</h1>
                <p class="lead"> everywhere to find me, reach me @</p>

                <Card.Link href="mailto:thuyvynguy@gmail.com">email</Card.Link>
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
