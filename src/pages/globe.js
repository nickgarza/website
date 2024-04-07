import Globe from "react-globe.gl";
import Navigation from "../components/navbar";
import globeJson from "../datasets/countries_110m.json";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import StateMap from "../components/stateMap";
import { Drawer, Classes } from "@blueprintjs/core";
import { useModalState } from "../datasets/hooks.ts";
import PhotoModal from "../components/modal";

const Glob = () => {
  const [show, setShow] = useState(false);
  const [country, setCountry] = useState("");

  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Navigation />
      <div>
        <Globe
          // globeImageUrl={"//unpkg.com/three-globe/example/img/earth-night.jpg"}
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
          onPolygonClick={(geometry) => {
            setCountry(geometry.properties.name);

            geometry.properties.visited
              ? setShow(geometry.properties.name)
              : setShow(false);
          }}
          polygonAltitude={0.025}
          polygonsTransitionDuration={300}
        />
      </div>
      <PhotoModal isOpen={show} close={handleClose} country={country} />
    </>
  );
};

export default Glob;
