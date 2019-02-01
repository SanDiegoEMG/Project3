import React, { Component } from 'react';
import withAuth from './withAuth';
import API from '../utils/API';
// import { Link } from 'react-router-dom';
import { SpeciesItem, DisplaySpecies } from './DisplaySpecies';
import { Container, Row, Col } from "./Grid";


class Backend extends Component {

    state = {
        mushrooms: [],
    };

  componentDidMount() {
    API.getAllSpecies()
    .then(res => {
        this.setState({ mushrooms: res.data })
        console.log(this.state.mushrooms)
    })
    .catch(() =>
    this.setState({
      mushrooms: [],
      message: "No Mushrooms Found"
    })
  );
  }

  render() {
    return (
        <Container>
           <Row>
            <Col size="xs-12">
              {!this.state.mushrooms.length ? (
                <h1 className="text-center">{this.state.message}</h1>
              ) : (
                <DisplaySpecies>
                  {this.state.mushrooms.map(mushroom => {
                    return (
                      <SpeciesItem
                        name={mushroom.name_common}
                        formalName={mushroom.name_latin}
                        gestation={mushroom.gestation}
                      />
                    );
                  })}
                </DisplaySpecies>
              )}
            </Col>
         </Row>
        </Container>
    )
  }
}

export default withAuth(Backend);