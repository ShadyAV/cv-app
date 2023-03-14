import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    background-color: #8b8c89;
    width: 50%;
    padding: 40px 0px;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    @media (max-width: 1199px) {
        visibility: hidden;
    }
    ${(props) =>
        props.view &&
        css`
            visibility: visible;
            width: 100%;
            @media (max-width: 1199px) {
                visibility: visible;
            }
        `}
`

const PreviewMain = styled.div`
    display: grid; 
    grid-template: 2fr 8fr/ 7fr 3fr;
    background-color: #fff;
    padding: 12px;
    min-width: 600px;
    aspect-ratio: 1/1.4;
 
    border-radius: 6px;
    overflow-y: auto;
`
const PersonalArea = styled.div`
    grid-row: 1/2;
    grid-column: 1/2;
`

const AvatarArea = styled.div`
    grid-row: 1/2;
    grid-column: 2/3;
    background-color: #8b8c89;
`

const MainArea = styled.div`
    grid-row: 2/3;
    grid-column: 1/2;
    border-top: 2px solid #e7ecef;
    border-right: 2px solid #e7ecef;
`

const Aside = styled.aside`
    grid-row: 2/3;
    grid-column: 2/3;
`

const HeaderDiv = styled.div`
    display: grid;
    grid-template: 1fr 1fr/ 1fr 1fr;
`

const TopHeader = styled.div`
    grid-row: 1/3;
    grid-column: 1/3;
`

const BotHeader = styled.div`
    grid-row: 2/3;
    grid-column: 2/3;
`

class Preview extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <StyledSection view={this.props.view}>
                <PreviewMain>
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
                    <Aside>
                        <h2>Skills</h2>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JS</p>
                        <h2>Languages</h2>
                        <p>Russian</p>
                        <p>English</p>
                    </Aside>
                </PreviewMain>
            </StyledSection>
        );
    }

}

export default Preview;