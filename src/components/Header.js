import React, { Component } from 'react';
import styled from 'styled-components';
import headerIcon from '../assets/header-icon.png';

const HeaderWrapper = styled.header`
    display: flex;
    color: #f5f1ed;
    background-color: #002855;
    padding: 20px 40px;
    gap: 1rem;
    align-items: center;
    min-width: 100vw;
`

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <img src={headerIcon} height={45}></img>
                <h1>CV - Create Your Resume</h1>
            </HeaderWrapper>
        );
    }
}

export default Header;