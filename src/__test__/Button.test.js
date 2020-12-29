import React from 'react'
import ReactDom from 'react-dom'
import Buttons from '../Common/Buttons'
import { cleanup, fireEvent, render} from '@testing-library/react'

afterEach(cleanup);
it('Button load testing',()=>{
    const div = document.createElement('div');
    ReactDom.render(<Buttons />,div);   
})

it('Renders label correctly',()=>{
    const {getByTestId} = render(<Buttons >Create</Buttons>)
    expect(getByTestId("Button")).toBeTruthy();
})
