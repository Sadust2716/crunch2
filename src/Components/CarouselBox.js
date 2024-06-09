import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import LoginPage from '../Pages/LoginPage';
import RegPage from '../Pages/RegPage';
import Contacts from '../Pages/Contacts';
import "./CarouselBox.css";

export default class CarouselBox extends Component {
    componentDidMount() {
        this.adjustContainerHeight();
    }

    adjustContainerHeight = () => {
        // Получаем все элементы с классом 'container'
        var containers = document.querySelectorAll('.CarouselBox-LoginPage-container, .CarouselBox-Contacts-container, .CarouselBox-RegPage-container');
      
        // Вычисляем максимальную высоту среди всех контейнеров
        var maxHeight = 0;
        containers.forEach(function(container) {
          if (container.offsetHeight > maxHeight) {
            maxHeight = container.offsetHeight;
          }
        });
      
        // Устанавливаем всем контейнерам одинаковую максимальную высоту
        containers.forEach(function(container) {
          container.style.height = maxHeight + 'px';
        });
    };

    render() {
        return (
            <Carousel className="CarouselBox-Carousel-container">
                <Carousel.Item>
                    <Container className="CarouselBox-LoginPage-container">
                     <LoginPage /> 
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container className="CarouselBox-RegPage-container">
                     <RegPage />
                     </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container className="CarouselBox-Contacts-container">
                    <Contacts />
                    </Container>
                </Carousel.Item>
            </Carousel>
        );
    }
}
