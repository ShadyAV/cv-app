import React, { Component } from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';
import Button from '../utils/Button';
import ReactToPrint from 'react-to-print';

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
`

const PreviewMain = styled.div`
    padding: 5mm;
    font-size: 20px;
    display: grid; 
    grid-template: 54.4mm 232.6mm / 142mm 58mm;
    background-color: ${Theme.colors.lightblue};
    width: 210mm;
    height: 297mm;    
    border-radius: 2px;
    @media (max-width: 820px) {
        transform: scale(0.9);
    }
    @media (max-width: 740px) {
        transform: scale(0.81);
    }
    @media (max-width: 650px) {
        transform: scale(0.7);
    }
    @media (max-width: 570px) {
        transform: scale(0.6);
    }
    @media (max-width: 490px) {
        transform: scale(0.5);
    }
    @media (max-width: 400px) {
        transform: scale(0.4); 
    }
    @media (max-width: 322px) {
        transform: scale(0.37); 
    }
`
const PersonalArea = styled.div`
    grid-row: 1 / 2;
    grid-column: 1 / 2;
`

const AvatarArea = styled.div`
    grid-row: 1 / 2;
    grid-column: 2 / 3;
`

const MainArea = styled.div`
    grid-row: 2 / 3;
    grid-column: 1 / 2;
`

const HeaderDiv = styled.div`
    max-width: 142mm;
    grid-row: 1 / 2;
    grid-column: 1 / 2; 
`

const Aside = styled.aside`
    padding-top: 20px;
    grid-row: 2 / 3;
    grid-column: 2 / 3;
`

const StyledHeader = styled.h1`
    line-height: 1;
    font-size: 60px;
    color: dodgerblue;
`

const JobTitle = styled.p`
    font-weight: 600;
    font-size: 30px;
    color: dodgerblue;
`

const Summary = styled.p`
    overflow-wrap: break-word;
`

const StyledH2 = styled.h2`
    padding-top: 20px;
    color: dodgerblue;
`

const StyledImg = styled.img`
    width: ${props => props.resume['Personal Information'].Photo ? "100%" : null};
    height: ${props => props.resume['Personal Information'].Photo ? "100%" : null};
`

class Preview extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <StyledSection>
                <PreviewMain ref={el => (this.componentRef = el)}>
                    <PersonalArea>
                        <HeaderDiv>
                            <StyledHeader>
                                {this.props.resume['Personal Information']['First Name']}{' '}
                                {this.props.resume['Personal Information']['Last Name']}</StyledHeader>
                            <JobTitle>{this.props.resume['Personal Information']['Job Title']}</JobTitle>
                            <Summary>{this.props.resume['Personal Information'].Description}</Summary>
                        </HeaderDiv>
                    </PersonalArea>
                    <AvatarArea>
                        <StyledImg
                            resume={this.props.resume}
                            src={this.props.resume['Personal Information'].Photo}>
                        </StyledImg>
                    </AvatarArea>
                    <MainArea>
                        <StyledH2>
                            {this.props.resume['Employment History'][0] ? 'Employment History' : null}
                        </StyledH2>
                        {this.props.resume['Employment History'].map((item) => {
                            return (
                                <div key={item.id}>
                                    <p>
                                        {item['Job Title']}
                                        {item.Employer ? ' at ' : null}
                                        {item.Employer}
                                        {item.City ? ', ' : null}
                                        {item.City}
                                    </p>
                                    <p>
                                        {item['Start Date']}
                                        {item['Start Date'] && item['End Date'] ? ' - ' : null}
                                        {item['End Date']}
                                    </p>
                                    <Summary>{item.Description}</Summary>
                                </div>
                            );
                        })}

                        <StyledH2>
                            {this.props.resume.Education[0] ? 'Education' : null}
                        </StyledH2>
                        {this.props.resume.Education.map((item) => {
                            return (
                                <div key={item.id}>
                                    <p>
                                        {item.School}
                                        {item.Degree ? ' at ' : null}
                                        {item.Degree}
                                        {item.City ? ', ' : null}
                                        {item.City}
                                    </p>
                                    <p>
                                        {item['Start Date']}
                                        {item['Start Date'] && item['End Date'] ? ' - ' : null}
                                        {item['End Date']}
                                    </p>
                                    <Summary>{item.Description}</Summary>
                                </div>
                            );
                        })}
                    </MainArea>
                    <Aside>
                        <p>
                            {this.props.resume['Personal Information'].City}
                            {this.props.resume['Personal Information'].City ? ', ' : null}
                            {this.props.resume['Personal Information'].Country}
                        </p>
                        <p>{this.props.resume['Personal Information'].Phone}</p>
                        <p>{this.props.resume['Personal Information'].Email}</p>
                    </Aside>
                </PreviewMain>
                <ReactToPrint
                    trigger={() => <Button text={'To PDF'} />}
                    content={() => this.componentRef}
                />
            </StyledSection>
        );
    }

}

export default Preview;