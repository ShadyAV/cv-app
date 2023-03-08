import React, { Component } from 'react';
import Input from '../utils/Input';
import styled from 'styled-components';
import FileInput from '../utils/FileInput';
import Date from '../utils/Date';
import TextArea from '../utils/TextArea';

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 40px;
    width: 50%
`

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
`

const FormSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
`

const StyledHeader = styled.h3`
    margin-bottom: 16px;
`

const DoubleInput = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 24px;
    gap: 40px;
`

class Form extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <FormContainer>
                <StyledSection>
                    <FormSection>
                        <StyledHeader>Personal Information</StyledHeader>
                        <DoubleInput>
                            <Input type={'text'} label={'Job Title'} />
                            <FileInput type={'file'} label={'Photo'} />
                        </DoubleInput>
                        <DoubleInput>
                            <Input type={'text'} label={'First Name'} />
                            <Input type={'text'} label={'Last Name'} />
                        </DoubleInput>
                        <DoubleInput>
                            <Input type={'text'} label={'Country'} />
                            <Input type={'text'} label={'City'} />
                        </DoubleInput>
                        <DoubleInput>
                            <Input type={'email'} label={'Email'} />
                            <Input type={'tel'} label={'Phone'} />
                        </DoubleInput>
                        <TextArea label={'Description'} />
                    </FormSection>
                    <FormSection>
                        <StyledHeader>Experience</StyledHeader>
                        <DoubleInput>
                            <Input type={'text'} label={'Job title'} />
                            <Input type={'text'} label={'Employer'} />
                        </DoubleInput>
                        <DoubleInput>
                            <Date />
                            <Input type={'text'} label={'City'} />
                        </DoubleInput>
                        <TextArea label={'Description'} />
                    </FormSection>
                    <FormSection>
                        <StyledHeader>Education</StyledHeader>
                        <DoubleInput>
                            <Input type={'text'} label={'School'} />
                            <Input type={'text'} label={'Degree'} />
                        </DoubleInput>
                        <DoubleInput>
                            <Date />
                            <Input type={'text'} label={'City'} />
                        </DoubleInput>
                        <TextArea label={'Description'} />
                    </FormSection>
                </StyledSection>
            </FormContainer>
        );
    }

}

export default Form;