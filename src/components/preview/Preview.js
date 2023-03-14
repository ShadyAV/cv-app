import React, { Component } from 'react';
import styled from 'styled-components';
import Theme from '../../styles/Theme';
import Button from '../utils/Button';
import ReactToPrint from 'react-to-print';

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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
        grid-template: calc(54.4mm*0.9) calc(232.6mm*0.9) / calc(142mm*0.9) calc(58mm*0.9);
        width: calc(210mm*0.9);
        height: calc(297mm*0.9);    
    }
    @media (max-width: 740px) {
        grid-template: calc(54.4mm*0.8) calc(232.6mm*0.8) / calc(142mm*0.8) calc(58mm*0.8);
        width: calc(210mm*0.8);
        height: calc(297mm*0.8);    
    }
    @media (max-width: 650px) {
        grid-template: calc(54.4mm*0.7) calc(232.6mm*0.7) / calc(142mm*0.7) calc(58mm*0.7);
        width: calc(210mm*0.7);
        height: calc(297mm*0.7);    
    }
    @media (max-width: 570px) {
        grid-template: calc(54.4mm*0.6) calc(232.6mm*0.6) / calc(142mm*0.6) calc(58mm*0.6);
        width: calc(210mm*0.6);
        height: calc(297mm*0.6);    
    }
    @media (max-width: 490px) {
        grid-template: calc(54.4mm*0.5) calc(232.6mm*0.5) / calc(142mm*0.5) calc(58mm*0.5);
        width: calc(210mm*0.5);
        height: calc(297mm*0.5);    
    }
    @media (max-width: 400px) {
        grid-template: calc(54.4mm*0.4) calc(232.6mm*0.4) / calc(142mm*0.4) calc(58mm*0.4);
        width: calc(210mm*0.4);
        height: calc(297mm*0.4);    
    }
`
const PersonalArea = styled.div`
    grid-row: 1 / 2;
    grid-column: 1 / 2;
`

const AvatarArea = styled.div`
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    background-color: dodgerblue;
`

const MainArea = styled.div`
    grid-row: 2 / 3;
    grid-column: 1 / 3;
`

const HeaderDiv = styled.div`
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
`

const TopHeader = styled.div`
    grid-row: 1 / 3;
    grid-column: 1 / 3;
`

const BotHeader = styled.div`
    grid-row: 2 / 3;
    grid-column: 2 / 3;
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
                            <TopHeader>
                                <h1>John Smith</h1>
                                <p>Frontend Developer</p>
                                <p>It is my summary</p>
                            </TopHeader>
                            <BotHeader>
                                <p>Novosibirsk, Russia</p>
                                <p>89134601937</p>
                                <p>jshadymail@gmail.com</p>
                            </BotHeader>
                        </HeaderDiv>
                    </PersonalArea>
                    <AvatarArea></AvatarArea>
                    <MainArea>
                        <h2>Employment History</h2>
                        <p>Network Engineer at Eltex, Novosibirsk</p>
                        <p>November 2020 - February 2021</p>
                        <p>Job desc</p>
                        <h2>Education</h2>
                        <p>Bachelor at SGUGiT, Novosibirsk</p>
                        <p>September 2017 - September 2021</p>
                        <p>Education desc</p>
                    </MainArea>
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