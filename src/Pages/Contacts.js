import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width: '500px' }} className="mt-4">
                <h1 className="text-center">Contact Us</h1>
                <Form>
                    <Form.Group controlId="FormBasicEmail">
                        <Form.Label>Email adress</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" /> 
                        <Form.Text>
                            We'll never share your email with anyone else 
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="FormBasicPassword">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as= "textarea" rows ="3" />
                    </Form.Group >

                    <Form.Group controlId="FormBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out " />
                    </Form.Group >

                    <Button variant="primary" type="submit"> Submit </Button>
                </Form>
            </Container>
        )
    }
}