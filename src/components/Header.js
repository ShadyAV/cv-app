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