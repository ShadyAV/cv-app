import React, { Component } from 'react';
import Form from './form/Form';
import Preview from './preview/Preview';
import styled from 'styled-components';
import Button from './utils/Button';
import uniqid from "uniqid";
import Data from './preview/Data';

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
            resume: Data,
        }
    }

    handleView = () => {
        this.setState({
            view: this.state.view === true ? false : true,
        })
    }

    handleAddEmployer = () => {
        this.setState({
            resume: {
                'Personal Information': this.state.resume['Personal Information'],
                'Employment History': [...this.state.resume['Employment History'],
                {
                    id: uniqid(),
                    'Job Title': '',
                    Employer: '',
                    'Start Date': '',
                    'End Date': '',
                    City: '',
                    Description: '',
                },],
                Education: this.state.resume.Education,
            },
        });
    }

    handleDeleteEmployer = (e) => {
        let empId = e.target.getAttribute('data-index');
        this.setState({
            resume: {
                'Personal Information': this.state.resume['Personal Information'],
                'Employment History': this.state.resume['Employment History'].filter(item => item.id !== empId),
                Education: this.state.resume.Education,
            }
        });
    };

    handleAddEducation = () => {
        this.setState({
            resume: {
                'Personal Information': this.state.resume['Personal Information'],
                'Employment History': this.state.resume['Employment History'],
                Education: [...this.state.resume.Education,
                {
                    id: uniqid(),
                    'School': '',
                    Degree: '',
                    'Start Date': '',
                    'End Date': '',
                    City: '',
                    Description: '',
                },]
            },
        });
    };

    handleDeleteEducation = (e) => {
        let empId = e.target.getAttribute('data-index');
        this.setState({
            resume: {
                'Personal Information': this.state.resume['Personal Information'],
                'Employment History': this.state.resume['Employment History'],
                Education: this.state.resume.Education.filter(item => item.id !== empId),
            }
        });
    };

    render() {
        return (
            <StyledMain>
                <Form
                    onAddEmployer={this.handleAddEmployer}
                    onDeleteEmployer={this.handleDeleteEmployer}
                    onAddEducation={this.handleAddEducation}
                    onDeleteEducation={this.handleDeleteEducation}
                    resume={this.state.resume} />
                <Preview
                    view={this.state.view === true ? null : true}
                    resume={this.state.resume} />
                <Button
                    text={'Preview'}
                    previewBtn
                    onClick={this.handleView} />
            </StyledMain>
        );
    }

}

export default Main;