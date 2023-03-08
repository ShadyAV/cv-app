import React, { Component } from 'react';
import styled from 'styled-components';

const DivWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    flex: 1;
    margin-bottom: 16px;
`

const StyledArea = styled.textarea`
    width: 100%;
    height: 200px;
    background-color: #e3f2fd;
    border: none;
    outline: none;
    resize: none;
    padding: 12px 16px;
    font-size: 20px;
`

class TextArea extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <DivWrapper>
                <label htmlFor={this.props.label}>{this.props.label}</label>
                <StyledArea id={this.props.label}></StyledArea>
            </DivWrapper>
        );
    }

}

export default TextArea;