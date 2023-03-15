import React, { Component } from 'react';
import styled from 'styled-components';
import headerIcon from '../assets/header-icon.png';

const HeaderWrapper = styled.header`
    display: flex;
    color: #000;
    padding: 40px 0px 0px 80px;
    gap: 1rem;
    align-items: center;
    width: 100%;
    @media (max-width: 820px) {
        padding: 30px 0px 0px 60px;
    }
    @media (max-width: 740px) {
        padding: 25px 0px 0px 55px;
    }
    @media (max-width: 490px) {
        padding: 20px 0px 0px 45px;
    }
    @media (max-width: 400px) {
        padding: 20px 0px 0px 35px;
    }
    @media (max-width: 322px) {
        padding: 15px 0px 0px 25px;
    }
`

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <img
                    src={headerIcon}
                    height={45}></img>
                <h1>CV - Create Your Resume</h1>
            </HeaderWrapper>
        );
    }
}

export default Header;