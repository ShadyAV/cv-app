import React, { Component } from 'react';
import styled from 'styled-components';

const DivWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    flex: 1;
    justify-content: center;
`

const Label = styled.label`
    margin-bottom: 6px;
`

const StyledFileInput = styled.input`
    min-width: ${props => props.type === "date" ? "100px" : "285px"};
    margin-right: ${props => props.type === "date" ? "10px" : "0px"};
    font-size: 20px;
    &::file-selector-button {
        color: dodgerblue;
        border: thin solid grey;
        border-radius: 2px;
        font-size: 20px;
        padding: 6px;
    }
`

class FileInput extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <DivWrapper>
                <Label htmlFor={this.props.label}>{this.props.label}</Label>
                <StyledFileInput type={this.props.type} id={this.props.label} accept='image/*' />
            </DivWrapper>
        );
    }

}

export default FileInput;