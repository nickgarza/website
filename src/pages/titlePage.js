import { Card, Col, Container, Row } from "react-bootstrap";
import Resume from "./resumeNickGarza.pdf";

export default function TitlePage() {
  return (
    <Container>
      <br></br>
      <Row>
        <Col xs={12}>
          <Card style={{ padding: "50px" }}>
            <Card.Body>
              <p class="display-4">
                <span
                  class="display-1"
                  style={{
                    fontFamily: "Concert One",
                    color: "#779ecb",
                  }}
                >
                  NICHOLAS GARZA{" "}
                </span>
                <span
                  style={{
                    fontFamily: "monospace",
                  }}
                ></span>
                <br></br>Software Engineer at Microsoft
                <br></br>
                <br></br>
              </p>
              <p
                style={{
                  fontFamily: "monospace",
                }}
              ></p>
              graphics programming // back-end development
              <br></br>
              <Card.Link href="https://github.com/nickgarza">github</Card.Link>
              <Card.Link href="https://www.linkedin.com/in/nicholaspgarza/">
                linkedin
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
