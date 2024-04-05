import Globe from "react-globe.gl";
import Navigation from "../components/navbar";
import globeJson from "../datasets/countries_110m.json";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

const Glob = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (name) => setShow(name);
  return (
    <>
      <Navigation />
      <div className="cursor-move">
        <Globe
          polygonsData={globeJson.features}
          polygonCapColor={(geometry) => {
            return geometry.properties.visited ? "#50daa799" : "#eeeeee45";
          }}
          polygonSideColor={(geometry) => {
            return geometry.properties.visited ? "green" : "grey";
          }}
          polygonStrokeColor={(geometry) => {
            return geometry.properties.visited ? "blue" : "grey";
          }}
          polygonLabel={(geometry) => {
            return geometry.properties.name;
          }}
          onPolygonClick={(geometry) =>
            geometry.properties.visited
              ? handleShow(geometry.properties.name)
              : setShow(false)
          }
          polygonAltitude={0.025}
          polygonsTransitionDuration={300}
        />
      </div>

      <Modal
        size="xl"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            ThuyVy Traveled To: {show}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{show}</Modal.Body>
      </Modal>
    </>
  );
};

export default Glob;
