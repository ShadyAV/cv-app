import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../utils/Input';
import TextArea from '../utils/TextArea';
import Button from '../utils/Button';
import Date from '../utils/Date';

const History = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid #e3f2fd;
    padding: 16px;
    margin-bottom: 16px;
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

class Education extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <>
                <StyledHeader>Education</StyledHeader>
                {this.props.ids.map((item) => {
                    return (
                        <History key={item.id}>
                            <DoubleInput>
                                <Input
                                    type={'text'}
                                    label={'School'} />
                                <Input
                                    type={'text'}
                                    label={'Degree'} />
                            </DoubleInput>
                            <DoubleInput>
                                <Date />
                                <Input
                                    type={'text'}
                                    label={'City'} />
                            </DoubleInput>
                            <TextArea
                                label={'Description'} />
                            <Button
                                text={'Remove'}
                                dataIndex={item.id}
                                onClick={this.props.deleteEducation}></Button>
                        </History>
                    );
                })}
            </>
        );
    }
}

export default Education;