import { Modal, Row, Col, Container } from "react-bootstrap";

const PhotoModal = ({ isOpen, close, country }) => {
  const images = require.context(`../photos/travel`, true);
  const imageList = images
    .keys()
    .map((image) => images(image))
    .filter((f) =>
      f.toLowerCase().includes(country.toLowerCase().replace(/ /g, ""))
    );
  return (
    <Modal size="xl" show={isOpen} onHide={close} centered>
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          ThuyVy Travels To {country}!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container fluid>
          <Row>
            <Col xs={12} md={4}>
              {imageList.slice(0, imageList.length / 3).map((image, index) => (
                <img
                  style={{
                    maxWidth: "100%",
                    padding: "5px",
                  }}
                  key={index}
                  src={image}
                  alt={`image-${index}`}
                />
              ))}
            </Col>
            <Col xs={12} md={4}>
              {imageList
                .slice(imageList.length / 3, (imageList.length / 3) * 2)
                .map((image, index) => (
                  <img
                    style={{
                      maxWidth: "100%",
                      padding: "5px",
                    }}
                    key={index}
                    src={image}
                    alt={`image-${index}`}
                  />
                ))}
            </Col>
            <Col xs={12} md={4}>
              {imageList
                .slice((imageList.length / 3) * 2, imageList.length)
                .map((image, index) => (
                  <img
                    style={{
                      maxWidth: "100%",
                      padding: "5px",
                    }}
                    key={index}
                    src={image}
                    alt={`image-${index}`}
                  />
                ))}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default PhotoModal;
