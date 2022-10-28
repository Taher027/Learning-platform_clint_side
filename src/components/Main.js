import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CourseTitle from './CourseTitle';
import Header from './Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='4'>
                        
                   <CourseTitle></CourseTitle>
                    </Col>
                    <Col lg='8'> <h2>this is right side</h2></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;