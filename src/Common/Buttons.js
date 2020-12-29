import React from 'react'
import {
    Button
} from 'reactstrap';

export default function Buttons(props) {
    return (
            <Button
            data-testid="Button"
                color="primary"
                disabled={props.Disabled}
                onClick={props.OnClick}
            >{props.children}</Button>
    )
}
