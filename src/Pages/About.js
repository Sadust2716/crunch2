import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Tab, Nav, Row, Col } from "react-bootstrap";
export default class About extends Component {
    render() {
        return (
            <div>
                <Container className="mt-4">
                    <Tab.Container id = "left-tab-example" defaultActiveKey = "first">
                        <Row>
                            <Col sm = {3}>
                                <Nav variant="pills" className= "flex-column mt-2">
                                    <Nav.Item>
                                        <Nav.Link eventKey = "first">Design</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey = "second">Team</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey = "third">Programming</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey = "fourth">Frameworks</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey = "fifth">Libraries</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm = {9}>
                                <Tab.Content className="mt-3"> 
                                    <Tab.Pane eventKey = "first"> 
                                     <img 
                                      src = "https://www.dvfu.ru/upload/iblock/a8a/165150534.jpg" 
                                      alt='' 
                                     />
                                     <p>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                      Fermentum iaculis eu non diam phasellus vestibulum. Nibh mauris cursus mattis molestie a iaculis. 
                                      Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. 
                                      Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Imperdiet nulla malesuada pellentesque elit. 
                                      In dictum non consectetur a erat. Adipiscing tristique risus nec feugiat in fermentum posuere urna. 
                                      Diam maecenas sed enim ut sem viverra aliquet. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. 
                                      Proin fermentum leo vel orci. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. 
                                      Tincidunt ornare massa eget egestas purus viverra accumsan in. 
                                      Dignissim suspendisse in est ante in. Vulputate ut pharetra sit amet aliquam id diam maecenas.
                                      </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey = "second"> 
                                     <img 
                                      src = "https://www.equipnet.ru/netcat_files/userfiles/52079/Chaynyy_magazin/006-3.jpg" 
                                      alt='' 
                                     />
                                     <p>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                      Fermentum iaculis eu non diam phasellus vestibulum. Nibh mauris cursus mattis molestie a iaculis. 
                                      Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. 
                                      Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Imperdiet nulla malesuada pellentesque elit. 
                                      In dictum non consectetur a erat. Adipiscing tristique risus nec feugiat in fermentum posuere urna. 
                                      Diam maecenas sed enim ut sem viverra aliquet. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. 
                                      Proin fermentum leo vel orci. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. 
                                      Tincidunt ornare massa eget egestas purus viverra accumsan in. 
                                      Dignissim suspendisse in est ante in. Vulputate ut pharetra sit amet aliquam id diam maecenas.
                                      </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey = "third"> 
                                     <img 
                                      src = "https://karpovka.com/pics/2020/08/44444444444444444444444444.jpg" 
                                      alt='' 
                                    />
                                     <p>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                      Fermentum iaculis eu non diam phasellus vestibulum. Nibh mauris cursus mattis molestie a iaculis. 
                                      Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. 
                                      Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Imperdiet nulla malesuada pellentesque elit. 
                                      In dictum non consectetur a erat. Adipiscing tristique risus nec feugiat in fermentum posuere urna. 
                                      Diam maecenas sed enim ut sem viverra aliquet. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. 
                                      Proin fermentum leo vel orci. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. 
                                      Tincidunt ornare massa eget egestas purus viverra accumsan in. 
                                      Dignissim suspendisse in est ante in. Vulputate ut pharetra sit amet aliquam id diam maecenas.
                                      </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey = "fourth"> 
                                     <img 
                                      src = "http://www.fitfit.ru/img/p40b299d496eea64244b5d2e96901d1c7-w900-h600-tm.jpg" 
                                      alt='' 
                                     />
                                     <p>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                      Fermentum iaculis eu non diam phasellus vestibulum. Nibh mauris cursus mattis molestie a iaculis. 
                                      Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. 
                                      Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Imperdiet nulla malesuada pellentesque elit. 
                                      In dictum non consectetur a erat. Adipiscing tristique risus nec feugiat in fermentum posuere urna. 
                                      Diam maecenas sed enim ut sem viverra aliquet. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. 
                                      Proin fermentum leo vel orci. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. 
                                      Tincidunt ornare massa eget egestas purus viverra accumsan in. 
                                      Dignissim suspendisse in est ante in. Vulputate ut pharetra sit amet aliquam id diam maecenas.
                                      </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey = "fifth"> 
                                     <img 
                                      src = "https://s0.rbk.ru/v6_top_pics/media/img/9/29/755754668931299.jpeg" 
                                      alt='' 
                                    />
                                     <p>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                      Fermentum iaculis eu non diam phasellus vestibulum. Nibh mauris cursus mattis molestie a iaculis. 
                                      Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. 
                                      Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Imperdiet nulla malesuada pellentesque elit. 
                                      In dictum non consectetur a erat. Adipiscing tristique risus nec feugiat in fermentum posuere urna. 
                                      Diam maecenas sed enim ut sem viverra aliquet. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. 
                                      Proin fermentum leo vel orci. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. 
                                      Tincidunt ornare massa eget egestas purus viverra accumsan in. 
                                      Dignissim suspendisse in est ante in. Vulputate ut pharetra sit amet aliquam id diam maecenas.
                                      </p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </div>
        )
    }
}