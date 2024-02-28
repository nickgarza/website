import { Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/navbar";
import MapChart from "../components/mapChart";
import StateMap from "../components/stateMap";

export default function Travel() {
  return (
    <>
      <Navigation />
      <Container>
        <Row>
          <Col>
            <h1 class="display-2 text-right" style={{ textAlign: "right" }}>
              thuyvy travels
            </h1>
          </Col>
        </Row>
        <Card>
          <Row>
            <Col xs={12}>
              <MapChart />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <StateMap />
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}
