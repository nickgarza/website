import { Card, Col, Container, Row } from "react-bootstrap";
import Resume from "./resume_thuyvynguyen.pdf";

export default function TitlePage() {
  return (
    <Container>
      <br></br>
      <br></br>
      <br></br>
      <Row>
        <Col xs={12}>
          <Card style={{ padding: "50px" }}>
            <Card.Body>
              <p class="display-4">
                hey! i'm{" "}
                <span
                  class="display-1"
                  style={{
                    color: "peachpuff",
                    fontFamily: "Concert One",
                  }}
                >
                  <br></br>
                  Thuy-Vy Nguyen{" "}
                </span>
                <small style={{ color: "peachpuff" }}> (twee-vee win)</small>
                <br></br>a full-stack engineer
                <span
                  style={{
                    color: "pink",
                  }}
                >
                  {" "}
                  @ oracle
                </span>
                . interested in creating and doing cool and silly things.
                <br></br> learn more about them and me here!
              </p>
              <br></br>
              <br></br>
              <br></br>
              <Card.Link href={Resume}>resume</Card.Link>
              <Card.Link href="https://github.com/thuyvyng">github</Card.Link>
              <Card.Link href="https://www.linkedin.com/in/thuyvyng/">
                linkedin
              </Card.Link>
              <Card.Link href="mailto:thuyvynguy@gmail.com">email</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
