import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "../index.css";

const Lista = () => {
  return (
    <>
      
        <ListGroup style={{backgroundColor: '#E8FDFF'}} className="corta" >
          <ListGroup.Item id="celeste " style={{backgroundColor: '#E8FDFF'}}>
            {" "}
            Ecuador 2745, Libertad Calles Alberto Novion y Matura, Agustín
            Ferrari Garcia Belloso 1626, Agustín Ferrari{" "}
          </ListGroup.Item>
          <ListGroup.Item style={{backgroundColor: '#E8FDFF'}}>
            Gargia Velloso y Carlos Ocanto, Agustín Ferrari{" "}
          </ListGroup.Item>
          <ListGroup.Item style={{backgroundColor: '#E8FDFF'}}>Vacarezza 1090, Agustín Ferrari</ListGroup.Item>
          <ListGroup.Item style={{backgroundColor: '#E8FDFF'}}>
            Alfonsina Storni 2790, Barrio La Pradera, Agustín Ferrari
          </ListGroup.Item>
          <ListGroup.Item style={{backgroundColor: '#E8FDFF'}}>Montevideo 900, Mariano Acosta</ListGroup.Item>
          <ListGroup.Item style={{backgroundColor: '#E8FDFF'}}> Colombia 2686, Libertad </ListGroup.Item>
          <ListGroup.Item style={{backgroundColor: '#E8FDFF'}}> Colombia 2010, Libertad </ListGroup.Item>
          <ListGroup.Item style={{backgroundColor: '#E8FDFF'}}>Alem 3481, Parque San Martin </ListGroup.Item>
          <ListGroup.Item style={{backgroundColor: '#E8FDFF'}}>
            {" "}
            Ángel Carranza e Isabel de Bernes, Barrio Papa Francisco{" "}
          </ListGroup.Item>
          <ListGroup.Item style={{backgroundColor: '#E8FDFF'}}> Rondeau 1426, Barrio Santa Isabel </ListGroup.Item>
          <ListGroup.Item style={{backgroundColor: '#E8FDFF'}}> Pehuajo 1960, Libertad </ListGroup.Item>
          <ListGroup.Item style={{backgroundColor: '#E8FDFF'}}> Calle Pirovano 25, Barrio Tobal </ListGroup.Item>
        </ListGroup>
    </>
  );
};
export default Lista;
