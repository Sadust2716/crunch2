import React, { Component } from 'react';
import { Container,Row,Col, Card } from 'react-bootstrap';

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Card>
                            <img 
                             width={150}
                             height={150}
                             className="mr-3"
                             src="http://klublady.ru/uploads/posts/2022-02/1645087671_3-klublady-ru-p-raznie-sladosti-foto-3.jpg"                        
                            />

                            <Card.Body>
                                <h5>
                                    Blog Post
                                </h5>
                                <p>
                                Fermentum iaculis eu non diam phasellus vestibulum. 
                                Nibh mauris cursus mattis molestie a iaculis.
                                </p>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
        )
    }
}