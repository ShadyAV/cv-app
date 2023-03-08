import React, { Component } from 'react';
import styled from 'styled-components';

const StylerdFooter = styled.footer`
    text-align: center;
    background-color: #001233;
    color: #fff
`

class Footer extends Component {
    render() {
        return (
            <StylerdFooter>
                <p>avshady 2023</p>
            </StylerdFooter>
        );
    }

}

export default Footer;