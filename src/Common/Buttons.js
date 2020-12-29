import React from 'react'
import {
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom'

export default function Buttons(props) {
    return (
        <div className="App">
                    <Button
                        color="primary"
                        disabled={props.Disabled}
                        onClick={props.OnClick}
                    >{props.children}</Button>
                <Link to={props.LinkTo}>
                    <Button color="primary" onClick={props.OnReset}>
                        Back
                    </Button>
                </Link>
                </div>
    )
}
