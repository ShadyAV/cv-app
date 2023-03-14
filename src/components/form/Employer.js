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

class Employer extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <>
                <StyledHeader>Employment History</StyledHeader>
                {this.props.ids.map((item) => {
                    return (
                        <History key={item.id}>
                            <DoubleInput>
                                <Input
                                    type={'text'}
                                    label={'Job Title'}
                                    onChange={(e) => this.props.changeEmployer(e, item.id)}
                                    id={'Job Title Employer'} />
                                <Input
                                    type={'text'}
                                    label={'Employer'}
                                    onChange={(e) => this.props.changeEmployer(e, item.id)}
                                    id={'Employer'} />
                            </DoubleInput>
                            <DoubleInput>
                                <Date
                                    onChange={this.props.changeEmployer}
                                    idStart={'Start Date Employer'}
                                    idEnd={'End Date Employer'}
                                    id={item.id} />
                                <Input
                                    type={'text'}
                                    label={'City'}
                                    onChange={(e) => this.props.changeEmployer(e, item.id)}
                                    id={'City Employer'} />
                            </DoubleInput>
                            <TextArea
                                label={'Description'}
                                onChange={(e) => this.props.changeEmployer(e, item.id)}
                                id={'Description Employer'} />
                            <Button
                                text={'Remove'}
                                dataIndex={item.id}
                                onClick={this.props.deleteEmployer} />
                        </History>
                    );
                })}
            </>
        );
    }
}

export default Employer;