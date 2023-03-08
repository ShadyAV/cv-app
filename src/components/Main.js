import React, { Component } from 'react';
import Form from './form/Form';
import Preview from './preview/Preview';
import styled from 'styled-components';

const StyledMain = styled.main`
    display: flex;
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