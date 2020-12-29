import React from 'react'
import {
    Row, Col, Input
} from 'reactstrap';

export default function InputField(props) {
    return (
        <Row className="inputField">
        <Col xs={12} sm={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }} lg={{ size: 6, offset: 3 }}>
            <Input type='text' name="owner" value={props.Value}
                placeholder={props.Title}
                onChange={e=>props.onChange(e)}
            />
        </Col>
    </Row>
    )
}
