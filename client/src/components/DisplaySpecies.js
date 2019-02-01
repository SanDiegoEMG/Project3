import React from "react";
// import API from '../utils/API';
import { Container, Row, Col } from "./Grid";

  


// Display Species renders a bootstrap list item
export function DisplaySpecies({ children }) {
  return <ul className="list-group">{children}</ul>;
};
  

// SpeciesItem renders a bootstrap list item containing data from the recipe api call
export function SpeciesItem({
    name, 
    formalName,
    gestation
  }) 
  {
    return (
      <li className="list-group-item">
        <Container>
          <Row>
            <Col size="xs-8 sm-9">
              <h4>Common name: {name}</h4>
              <p>Formal name: {formalName}</p>
              <p>Gestation: {gestation}</p>
            </Col>
          </Row>
        </Container>
      </li>
    );
  }






  