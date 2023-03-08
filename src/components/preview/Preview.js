import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
    background-color: #e3f2fd;
    width: 50%;
`
const PreviewDiv = styled.div`
    height: 100vh;
    background-color: #e3f2fd;
    width: 100%;
`

class Preview extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <StyledSection>
                <PreviewDiv></PreviewDiv>
            </StyledSection>
        );
    }

}

export default Preview;