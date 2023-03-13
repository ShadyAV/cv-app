import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './Input';

const DivWrapper = styled.div`
    display: flex;
    max-width: 100%;
    flex: 1;
    gap: 10px;
    flex-wrap: wrap;
    @media (max-width: 1461px) {
        gap: 24px;
    }
`

class Date extends Component {
    render() {
        return (
            <DivWrapper>
                <Input
                    type={'date'}
                    label={'Start Date'} />
                <Input
                    type={'date'}
                    label={'End Date'} />
            </DivWrapper>
        );
    }

}

export default Date;