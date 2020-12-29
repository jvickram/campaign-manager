import React from 'react'
import { connect } from 'react-redux';
import {
    Container, Row, Col,
    Card, CardText, CardBody,
    CardFooter, Button
} from 'reactstrap';
import { Link } from 'react-router-dom'


function AllCampaigns(props) {
    const {allCampaign} = props
    return (
        <Container>
            <div className="App">
                <h3>All Campaigns</h3>
            </div>
            <Row>
                {allCampaign===undefined?<div className="App">List is empty</div>:allCampaign.map(item => {
                    const { owner, type, createdTime, lastmodifiedTime } = item
                    return (
                        <Col xs="12" sm="6" md="4" lg="4" key={createdTime}>
                            <Card>
                                <CardBody>
                                    <CardText>Owner: {owner}</CardText>
                                    <CardText>Type: {type}</CardText>
                                    <CardText>Created at: {createdTime}</CardText>
                                    <CardText>Last modified at : {lastmodifiedTime}</CardText>
                                </CardBody>
                                <CardFooter>
                                <Link to="/newcampaign"><Button color="primary" onClick={e=>{props.edit(item)}}> Edit</Button></Link>
                                </CardFooter>
                            </Card>
                        </Col>
                    )
                }
                )}
            </Row>
            
            <div className="App">
                <Link to="/"><Button color="primary">Back</Button></Link>
            </div>
        </Container>
    )
}

function mapState(state) {
    return {
        ...state,
    };
}

function mapDispatch(dispatch){
    return ({
        edit(item){
            console.log("item", item)
            dispatch({type:'EDIT_START', selected: item})
        }
    })
}

export default connect(mapState,mapDispatch)(AllCampaigns)
