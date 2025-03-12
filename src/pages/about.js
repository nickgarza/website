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
              all about me
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            {/* <img
              src={Me}
              alt="thuyvy"
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
                i'm currently in seattle, wa but i'm originally from portland,
                or. some of my favorite hobbies include traveling, photography,
                food, programming, music, pickleball, and hiking. would love to
                connect with anyone interested in any of the above or anything
                else
              </p>
              <p> random things to know about me</p>
              <ul>
                <li>
                  favorite place i've ever been: thailand (such amazing beaches
                  + food!)
                </li>
                <li>
                  {" "}
                  go-to orders
                  <ul>
                    <li>
                      {" "}
                      starbucks: iced white mocha/ iced vanilla latte /
                      starberry acai refersher (if too late for coffee)
                    </li>
                    <li> jamba juice: pink skittles</li>
                  </ul>
                </li>
                <li>
                  {" "}
                  the most embarrassing fact about me is that I "learned" how to
                  ride a bike on my 18th birthday
                </li>
                <li>
                  {" "}
                  my favorite books are Severance & The Coddling of the American
                  Mind
                </li>
                <li> pineapples DO belong on pizza</li>
                <li>
                  my favorite restaurants in seattle are: Kin Len, Kobuta &
                  Ookami, Azuki Udon, Cornellys, & Biang Biang but please let me
                  know of any reccs
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
