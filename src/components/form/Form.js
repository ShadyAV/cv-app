import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../utils/Button';
import Employer from './Employer';
import Education from './Education';
import Personal from './Personal';

const FormContainer = styled.div`
    padding: 40px 80px;
    width: 100%;
    height: 100%;
`

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
`

class Form extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <FormContainer>
                <StyledSection>
                    <Personal
                        changePersonal={this.props.onChangePersonal} />
                    <Employer
                        ids={this.props.resume["Employment History"]}
                        deleteEmployer={this.props.onDeleteEmployer}
                        changeEmployer={this.props.onChangeEmployer} />
                    <Button
                        text={'+ Add one more employment'}
                        onClick={this.props.onAddEmployer} />
                    <Education
                        ids={this.props.resume.Education}
                        deleteEducation={this.props.onDeleteEducation}
                        changeEducation={this.props.onChangeEducation} />
                    <Button
                        text={'+ Add one more education'}
                        onClick={this.props.onAddEducation} />
                </StyledSection>
            </FormContainer>
        );
    }

}

export default Form;