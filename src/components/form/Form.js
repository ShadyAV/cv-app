import React, { Component } from 'react';
import Input from '../utils/Input';
import styled from 'styled-components';
import FileInput from '../utils/FileInput';
import TextArea from '../utils/TextArea';
import Button from '../utils/Button';
import Employer from './Employer';
import uniqid from "uniqid";
import Education from './Education';

const FormContainer = styled.div`
    padding: 40px 80px;
    flex: 1;
`

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
`

const FormSection = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledHeader = styled.h3`
    margin: 16px 0px;
`

const DoubleInput = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 24px;
    gap: 24px;
`
const History = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid #e3f2fd;
    padding: 16px 16px 0px 16px;
    margin-bottom: 0px;
`

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employer: {
                id: uniqid(),
                employerIds: [],
            },
            education: {
                id: uniqid(),
                educationIds: [],
            }
        };

    }

    addEmployer = () => {
        this.setState({
            employer: {
                id: uniqid(),
                employerIds: [...this.state.employer.employerIds, this.state.employer.id],
            }
        });
    }

    deleteEmployer = (e) => {
        let empId = e.target.getAttribute('data-index');
        this.setState({
            employer: {
                id: this.state.employer.id,
                employerIds: this.state.employer.employerIds.filter(id => id !== empId),
            }
        });
    };

    addEducation = () => {
        this.setState({
            education: {
                id: uniqid(),
                educationIds: [...this.state.education.educationIds, this.state.education.id],
            }
        });
    }

    deleteEducation = (e) => {
        let empId = e.target.getAttribute('data-index');
        this.setState({
            education: {
                id: this.state.education.id,
                educationIds: this.state.education.educationIds.filter(id => id !== empId),
            }
        });
    };

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
                    <StyledHeader>Employment History</StyledHeader>
                    <Employer ids={this.state.employer.employerIds} deleteEmployer={this.deleteEmployer} />
                    <Button text={'+ Add one more employment'} onClick={this.addEmployer} />
                    <StyledHeader>Education</StyledHeader>
                    <Education ids={this.state.education.educationIds} deleteEducation={this.deleteEducation} />
                    <Button text={'+ Add one more education'} onClick={this.addEducation} ></Button>
                </StyledSection>
            </FormContainer>
        );
    }

}

export default Form;