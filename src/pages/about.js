import { Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/navbar";
import Me from "../photos/thuyvy.jpeg";

export default function About() {
  return (
    <>
      <Navigation />
      <Container>
        <br></br>
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
            <img
              src={Me}
              alt="thuyvy"
              style={{
                maxWidth: "100%",
                borderRadius: "50%",
                opacity: "90%",
                padding: "15px",
              }}
            />
          </Col>
          <Col>
            <Card>
              <p class="lead">
                i'm currently based in seattle, washington but i'm originally
                from portland, oregon. some of my favorite hobbies include
                traveling, photography, eating, programming, listening to music,
                and hiking. would love to connect with anyone interested in any
                of the above or anything else
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
                <li> salt & straw {">"} molly moon</li>
                <li>
                  my favorite restaurants in seattle are: Kin Len, Kobuta &
                  Ookami, Azuki Udon, Cornellys, & Biang Biang but please let me
                  know of any reccs
                </li>
              </ul>
              <Card.Link href="/travel"> thuyvy travels!</Card.Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
