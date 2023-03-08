import React, { Component } from 'react';
import styled from 'styled-components';

const DivWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    flex: 1;
`

const Label = styled.label`
    margin-bottom: 6px;
`

const StyledInput = styled.input`
    min-width: ${props => props.type === "date" ? "100px" : "285px"};
    margin-right: ${props => props.type === "date" ? "10px" : "0px"};
    background-color: #e3f2fd;
    border: none;
    border-radius: 2px;
    outline: none;
    font-size: 20px;
    padding: 12px 16px;
`

class Input extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <DivWrapper>
                <Label htmlFor={this.props.label}>{this.props.label}</Label>
                <StyledInput type={this.props.type} id={this.props.label} accept='image/*' />
            </DivWrapper>
        );
    }

}

export default Input;