import React, { Component } from 'react';
import styled from 'styled-components';

const StylerdFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    padding: 6px;
    width: 100%;
`

class Footer extends Component {
    render() {
        return (
            <StylerdFooter>
                <p>© avshady 2023</p>
            </StylerdFooter>
        );
    }

}

export default Footer;