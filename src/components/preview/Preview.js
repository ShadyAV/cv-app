import React, { Component } from 'react';
import styled from 'styled-components';

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
`

const PreviewMain = styled.div`
    display: grid; 
    grid-template: 2fr 8fr/ 7fr 3fr;
    background-color: #fff;
    padding: 12px;
    min-width: 600px;
    border-radius: 6px;
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

class Preview extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <StyledSection>
                <PreviewMain>
                    <PersonalArea>
                        <h1>John Smith</h1>
                        <p>Frontend Developer</p>
                        <p>It is my summary</p>
                    </PersonalArea>
                    <AvatarArea></AvatarArea>
                    <MainArea>
                        <h2>Employment History</h2>
                        <h2>Education</h2>
                    </MainArea>
                </PreviewMain>
            </StyledSection>
        );
    }

}

export default Preview;