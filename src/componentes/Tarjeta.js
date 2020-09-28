import React from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
/* import { Link } from "react-router-dom";
import gracias from "../images/gracias.png"; */
import Voluntarios from "./Voluntarios";

import "../index.css";


const Tarjeta = () => {
  return (
    <div>
      <Card style={{ width: "25rem"}} className="nueva" variant="top">
        <Card.Img src={Voluntarios} alt="Voluntarios de Raices" />
        <Card.Body>
          <Button variant="primary" className="voluntario btn-btn">
            DONAR!
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Tarjeta;
