import React, { Component } from 'react';
import Form from './form/Form';
import Preview from './preview/Preview';
import styled from 'styled-components';
import Button from './utils/Button';

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

        this.state = {
            view: true,
        }
    }

    handleView = () => {
        this.setState({
            view: this.state.view === true ? false : true,
        })
    }

    render() {
        return (
            <StyledMain>
                <Form />
                <Preview view={this.state.view === true ? null : true} />
                <Button text={'Preview'} previewBtn onClick={this.handleView} />
            </StyledMain>
        );
    }

}

export default Main;