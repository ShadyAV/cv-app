import React, { Component } from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';

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
    min-width: ${props => props.type === "date" ? "100%" : "100%"};
    max-width: ${props => props.type === "date" ? "140px" : "100%"};
    background-color: ${Theme.colors.lightblue};
    border: none;
    border-radius: 2px;
    outline: none;
    font-size: 20px;
    padding: 12px 16px;
    @media (max-width: 1461px) {
        max-width: 100%;
    }
`

class Input extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <DivWrapper>
                <Label
                    htmlFor={this.props.personal ? this.props.label : this.props.id}>
                    {this.props.label}</Label>
                <StyledInput
                    type={this.props.type}
                    id={this.props.personal ? this.props.label : this.props.id}
                    onChange={this.props.onChange} />
            </DivWrapper>
        );
    }

}

export default Input;