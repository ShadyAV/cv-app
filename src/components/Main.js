import React, { Component } from 'react';
import Form from './form/Form';
import Preview from './preview/Preview';
import styled from 'styled-components';

const StyledMain = styled.main`
    display: flex;
    justify-content: center;
    width: 50%;
    @media (max-width: 1199px) {
        width: 100%;
    }
`

class Main extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <StyledMain>
                <Form />
                <Preview />
            </StyledMain>
        );
    }

}

export default Main;