import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../utils/Button';
import Employer from './Employer';
import Education from './Education';
import Personal from './Personal';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 80px;
    flex: 1;
    @media (max-width: 820px) {
        padding: 30px 60px;
    }
    @media (max-width: 740px) {
        padding: 25px 55px;
    }
    @media (max-width: 490px) {
        padding: 20px 45px;
    }
    @media (max-width: 400px) {
        padding: 20px 35px;
    }
    @media (max-width: 322px) {
        padding: 15px 25px;
    }
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
                        changePersonal={this.props.onChangePersonal}
                        uploadFile={this.props.onUploadFile} />
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