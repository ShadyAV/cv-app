import React, { Component } from 'react';
import styled, { css } from 'styled-components';

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
    ${(props) =>
        props.previewBtn &&
        css`
          background-color: blue;
          color: #fff;
          position: fixed;
          bottom: 24px;
          right: 24px;
        `}
`

class Button extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <StyledButton
                previewBtn={this.props.previewBtn}
                onClick={this.props.onClick}
                data-index={this.props.dataIndex}>
                {this.props.text}
            </StyledButton>
        );
    }

}

export default Button;