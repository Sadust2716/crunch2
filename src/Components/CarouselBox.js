import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import test1 from '../assets/test1.jpg'
import test2 from '../assets/test2.jpg'
import test6 from '../assets/test6.jpeg'

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel className="mt-4">
                <Carousel.Item>
                    <img 
                       className="d-block w-100"
                       src={test1}
                       alt="Test1"
                    />
                    <Carousel.Caption>
                        <h3>Test1 image </h3>
                        <p>Сладость или гадость ???</p>
                    </Carousel.Caption> 
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                       className="d-block w-100"
                       src={test2}
                       alt="Test2"
                    />
                    <Carousel.Caption>
                        <h3>Test2 image </h3>
                        <p>Будешь красоткой с яблоком во рту</p>
                    </Carousel.Caption> 
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