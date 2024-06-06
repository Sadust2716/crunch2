import React, { Component } from 'react';
import CarouselBox from "../Components/CarouselBox";
import {  Card, Button, CardGroup } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox className="mt-4" />
            
            <CardGroup className="mt-4">
                <Card>
                 <Card.Img 
                  variant = "top"
                  src="https://milestonesinc.com/wp-content/uploads/2017/06/leadership-blue1600x1050.jpg" 
                 />
                 <Card.Body>
                    <Card.Title> Developers </Card.Title>
                    <Card.Text> 
                        Fermentum iaculis eu non diam phasellus vestibulum. 
                        Nibh mauris cursus mattis molestie a iaculis.
                    </Card.Text>
                    <Button variant="primary"> About Team</Button>
                 </Card.Body>
                </Card>

                <Card>
                 <Card.Img 
                  variant = "top"
                  src="https://expandgh.com/wp-content/uploads/2018/01/business-team.jpg" 
                 />
                 <Card.Body>
                    <Card.Title> Developers </Card.Title>
                    <Card.Text> 
                        Fermentum iaculis eu non diam phasellus vestibulum. 
                        Nibh mauris cursus mattis molestie a iaculis.
                    </Card.Text>
                    <Button variant="primary"> About Team</Button>
                 </Card.Body>
                </Card>
            </CardGroup>
            </>
        )
    }
}