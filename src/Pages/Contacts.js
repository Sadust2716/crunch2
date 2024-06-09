import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import "./Contacts.css"
export default class Contacts extends Component {
    render() {
        return (
            <Container className="Contacts-Contacts-container">
                <h1 className="Contacts-text-center">Напишите нам</h1>
                <Form className="Contacts-form-container">
                    <Form.Group controlId="FormBasicEmail">
                        <Form.Label>Email адрес</Form.Label>
                        <Form.Control 
                        className="Contacts-formControlEmail-container"
                        type="email" 
                        placeholder="Введите email" /> 
                    </Form.Group>

                    <Form.Group controlId="FormBasicPassword" className="Contacts-formGroupArea-container">
                        <Form.Label>Опишите ваше обращение</Form.Label>
                        <Form.Control 
                        className="Contacts-formControlArea-container"
                        as= "textarea" rows ="3" />
                    </Form.Group >

                    <Button className="Contacts-Form-button" variant="success" type="submit"> Отправить </Button>
                </Form>
            </Container>
        )
    }
}