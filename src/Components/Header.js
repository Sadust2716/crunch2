import React, { Component } from 'react';
import { Navbar, Container, Nav, Button, Form, FormControl, Row, Col } from 'react-bootstrap';
import logo from './CrLogo1.png';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
        <>
            <Navbar  collapseOnSelect expand="md" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        
                        <img
                            src={logo}
                            height="80"
                            width="110"
                            className="d-inline-block align-top"
                            alt="Logo"
                        /> 
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Container>
                         <Row>
                          <Col sm={6}>
                           <Form inline className="ml-lg">
                            <FormControl
                                type='text'
                                placeholder='Искать на площадке'
                                className='mb - 3'
                            />
                           </Form>
                          </Col>
                          <Col sm={1}>
                          <Button variant="outline-success">Поиск</Button> 
                          </Col>
                          <Col>
                           <Nav>
                            <Nav.Link href="/">Главная</Nav.Link>
                            <Nav.Link href="/loginPage" >Войти</Nav.Link>
                            <Nav.Link href="/Catalog" >Каталог</Nav.Link>
                            <Nav.Link href="/Basket" >Корзина</Nav.Link>
                            <Nav.Link href="/Basket" >Профиль</Nav.Link>
                           </Nav>
                          </Col>
                         </Row>
                        </Container>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
        </>
        )
    }
}

