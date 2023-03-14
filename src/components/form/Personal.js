import React, { Component } from 'react';
import styled from 'styled-components';
import FileInput from '../utils/FileInput';
import TextArea from '../utils/TextArea';
import Input from '../utils/Input';

const FormSection = styled.div`
    display: flex;
    flex-direction: column;
`

const DoubleInput = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 24px;
    gap: 24px;
`

const StyledHeader = styled.h3`
    margin: 16px 0px;
`

class Personal extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <FormSection>
                <StyledHeader>Personal Information</StyledHeader>
                <DoubleInput>
                    <Input
                        type={'text'}
                        label={'Job Title'}
                        onChange={this.props.changePersonal}
                        personal />
                    <FileInput
                        type={'file'}
                        label={'Photo'}
                        onChange={this.props.changePersonal} />
                </DoubleInput>
                <DoubleInput>
                    <Input
                        type={'text'}
                        label={'First Name'}
                        onChange={this.props.changePersonal}
                        personal />
                    <Input
                        type={'text'}
                        label={'Last Name'}
                        onChange={this.props.changePersonal}
                        personal />
                </DoubleInput>
                <DoubleInput>
                    <Input
                        type={'text'}
                        label={'Country'}
                        onChange={this.props.changePersonal}
                        personal />
                    <Input
                        type={'text'}
                        label={'City'}
                        onChange={this.props.changePersonal}
                        personal />
                </DoubleInput>
                <DoubleInput>
                    <Input
                        type={'email'}
                        label={'Email'}
                        onChange={this.props.changePersonal}
                        personal />
                    <Input
                        type={'tel'}
                        label={'Phone'}
                        onChange={this.props.changePersonal}
                        personals />
                </DoubleInput>
                <TextArea
                    label={'Description'}
                    onChange={this.props.changePersonal}
                    personal />
            </FormSection>
        );
    }

}

export default Personal;