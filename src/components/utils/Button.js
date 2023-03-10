import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border-radius: 2px;
    background-color: #fff;
    outline: none;
    border: none;
    color: #6096ba;
    padding: 6px;
    font-size: 16px;
    font-weight: 600;
    &:hover {
        background-color: #e3f2fd;
        cursor: pointer;
    }
`

class Button extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <StyledButton onClick={this.props.onClick} data-index={this.props.dataIndex}>{this.props.text}</StyledButton>
        );
    }

}

export default Button;