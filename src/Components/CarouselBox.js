import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Container } from 'react-bootstrap';
import LoginPage from '../Pages/LoginPage';
import RegPage from '../Pages/RegPage';
import Contacts from '../Pages/Contacts';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel className="mt-4">
                <Carousel.Item>
                    <Container >
                     <LoginPage /> 
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container >
                     <RegPage />
                     </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                    <Contacts />
                    </Container>
                </Carousel.Item>
            </Carousel>
        )
    }
}