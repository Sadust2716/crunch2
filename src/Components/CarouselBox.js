import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import test6 from '../assets/test6.jpeg'
import { Container } from 'react-bootstrap';
import LoginPage from '../Pages/LoginPage';
import RegPage from '../Pages/RegPage';

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel className="mt-4">
                <Carousel.Item>
                    <Container className="container-fluid" style={{background: "success"}}>
                     <LoginPage /> 
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container className="container-fluid" style={{background: "success"}}>
                     <RegPage />
                     </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                       className="d-block w-100"
                       src={test6}
                       alt="Test6"
                    />
                    <Carousel.Caption>
                        <h3>Test1 image </h3>
                        <p>Сладость или гадость ???</p>
                    </Carousel.Caption> 
                </Carousel.Item>
            </Carousel>
        )
    }
}