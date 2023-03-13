import React, { Component } from 'react';
import styled from 'styled-components';
import FileInput from '../utils/FileInput';
import TextArea from '../utils/TextArea';
import Input from '../utils/Input';

const FormSection = styled.div`
    display: flex;
    flex-direction: column;
`

const DoubleInput = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 24px;
    gap: 24px;
`

const StyledHeader = styled.h3`
    margin: 16px 0px;
`

class Personal extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <FormSection>
                <StyledHeader>Personal Information</StyledHeader>
                <DoubleInput>
                    <Input
                        type={'text'}
                        label={'Job Title'} />
                    <FileInput
                        type={'file'}
                        label={'Photo'} />
                </DoubleInput>
                <DoubleInput>
                    <Input
                        type={'text'}
                        label={'First Name'} />
                    <Input
                        type={'text'}
                        label={'Last Name'} />
                </DoubleInput>
                <DoubleInput>
                    <Input
                        type={'text'}
                        label={'Country'} />
                    <Input
                        type={'text'}
                        label={'City'} />
                </DoubleInput>
                <DoubleInput>
                    <Input
                        type={'email'}
                        label={'Email'} />
                    <Input
                        type={'tel'}
                        label={'Phone'} />
                </DoubleInput>
                <TextArea
                    label={'Description'} />
            </FormSection>
        );
    }

}

export default Personal;