import React, { Component } from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" variant="dark" className="footer-navbar" >
                    <Container>
                        <Nav className="mr-auto">
                            <Nav.Link href="/contacts">Контакты</Nav.Link>
                            <Nav.Link href="/about">О нас</Nav.Link>
                            <Nav.Link href="/blog" >Блог</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}

