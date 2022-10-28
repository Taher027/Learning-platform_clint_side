import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='4'> <h2>This left side</h2> </Col>
                    <Col lg='8'> <h2>this is right side</h2></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;