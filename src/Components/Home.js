import React, { Component } from 'react'
import {
    Container, Row, Col,
    Card, CardBody, Input, Button
} from 'reactstrap';
import { Link } from 'react-router-dom'
// import AllCampaigns from '../AllCampaign.json';
// import NewCampaign from './NewCampaign';

export default function Home() {
    
        return (
            <Container>
                <div className="App">Welcome to campaign manager</div>
                <Row>
                    <Col xs="12" sm="6" md="6" lg="4">
                    <Link to="/newcampaign">
                        <Card>
                            <CardBody>
                                New campaign
                            </CardBody>
                        </Card>
                    </Link>
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="4">
                    <Link to="/campaignslist">
                        <Card>
                            <CardBody>
                                All campaign
                            </CardBody>
                        </Card>
                    </Link>
                    </Col>
                </Row>

                
            </Container>
        )
    }
