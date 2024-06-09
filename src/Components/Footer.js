import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Footer.css';

export default class Footer extends Component {
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const footer = document.querySelector(".footer");
    
        if (footer) {
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const scrollTop = document.documentElement.scrollTop;
    
            if (scrollHeight - clientHeight <= scrollTop) {
                footer.style.display = "block";
            } else {
                footer.style.display = "none";
            }
        }
    };
    

    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" variant="dark" className="footer-navbar">
                    <Container>
                        <Nav className="mr-auto">
                            <Nav.Link href="/contacts">Контакты</Nav.Link>
                            <Nav.Link href="/about">О нас</Nav.Link>
                            <Nav.Link href="/blog">Блог</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}

