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
    };

    handleChangePersonal = (e) => {
        this.setState({
            resume: {
                'Personal Information': {
                    'Job Title': e.target.id === 'Job Title' ? e.target.value : this.state.resume['Personal Information']['Job Title'],
                    Photo: e.target.id === 'Photo' ? '' : this.state.resume['Personal Information'].Photo,
                    'First Name': e.target.id === 'First Name' ? e.target.value : this.state.resume['Personal Information']['First Name'],
                    'Last Name': e.target.id === 'Last Name' ? e.target.value : this.state.resume['Personal Information']['Last Name'],
                    Country: e.target.id === 'Country' ? e.target.value : this.state.resume['Personal Information'].Country,
                    City: e.target.id === 'City' ? e.target.value : this.state.resume['Personal Information'].City,
                    Email: e.target.id === 'Email' ? e.target.value : this.state.resume['Personal Information'].Email,
                    Phone: e.target.id === 'Phone' ? e.target.value : this.state.resume['Personal Information'].Phone,
                    Description: e.target.id === 'Description' ? e.target.value : this.state.resume['Personal Information'].Description,
                },
                'Employment History': this.state.resume['Employment History'],
                Education: this.state.resume.Education,
            },
        });
    };

    handleChangeEmployer = (e, id) => {
        const newStateEmp = this.state.resume['Employment History'].map(obj => {
            const index = this.state.resume['Employment History'].indexOf(obj);
            if (obj.id == id) {
                return {
                    ...obj,
                    id: this.state.resume['Employment History'][index].id,
                    'Job Title': e.target.id === 'Job Title Employer' ? e.target.value : this.state.resume['Employment History'][index]['Job Title'],
                    Employer: e.target.id === 'Employer' ? e.target.value : this.state.resume['Employment History'][index]['Employer'],
                    'Start Date': e.target.id === 'Start Date Employer' ? e.target.value : this.state.resume['Employment History'][index]['Start Date'],
                    'End Date': e.target.id === 'End Date Employer' ? e.target.value : this.state.resume['Employment History'][index]['End Date'],
                    City: e.target.id === 'City Employer' ? e.target.value : this.state.resume['Employment History'][index]['City'],
                    Description: e.target.id === 'Description Employer' ? e.target.value : this.state.resume['Employment History'][index]['Description'],
                };
            }
            return obj;
        })
        this.setState({
            resume: {
                'Personal Information': this.state.resume['Personal Information'],
                'Employment History': newStateEmp,
                Education: this.state.resume.Education,
            },
        })
    };

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

    handleChangeEducation = (e, id) => {
        const newStateEdu = this.state.resume.Education.map(obj => {
            const index = this.state.resume.Education.indexOf(obj);
            if (obj.id == id) {
                return {
                    ...obj,
                    id: this.state.resume.Education[index].id,
                    'School': e.target.id === 'School' ? e.target.value : this.state.resume.Education[index]['School'],
                    Degree: e.target.id === 'Degree' ? e.target.value : this.state.resume.Education[index]['Degree'],
                    'Start Date': e.target.id === 'Start Date Education' ? e.target.value : this.state.resume.Education[index]['Start Date'],
                    'End Date': e.target.id === 'End Date Education' ? e.target.value : this.state.resume.Education[index]['End Date'],
                    City: e.target.id === 'City Education' ? e.target.value : this.state.resume.Education[index]['City'],
                    Description: e.target.id === 'Description Education' ? e.target.value : this.state.resume.Education[index]['Description'],
                };
            }
            return obj;
        })
        this.setState({
            resume: {
                'Personal Information': this.state.resume['Personal Information'],
                'Employment History': this.state.resume['Employment History'],
                Education: newStateEdu,
            },
        })
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
                    onChangePersonal={this.handleChangePersonal}
                    onChangeEmployer={this.handleChangeEmployer}
                    onChangeEducation={this.handleChangeEducation}
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