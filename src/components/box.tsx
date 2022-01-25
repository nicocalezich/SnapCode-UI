import React from 'react'
import styled from 'styled-components';
import Repos from '../types/repos';

const Container = styled.div`
    display: block;
    padding: 10px;
    width: 100%;
    height: 100%;
    background: #DFDEDE;
    counter-reset: section;
`;

const Code = styled.div`
    &:before {
        counter-increment: section;
        content: counter(section) ". ";
        display: inline-block;
        width: 2em;
        padding-left: auto;
        margin-left: auto;
        text-align: left;
    }
`;

const Copy = styled.button`
    position: absolute;
    right: 0;
    bottom: 0;   
`;

type BoxProps = {
    selectedRepo: Repos
}

const stringToArray = (code: String, delimiter: string) => {
    return code.split(delimiter)
}

const Box = ({ selectedRepo }: BoxProps) => {

    const { code, title = '' } = selectedRepo ?? {}

    const handleSelectedRepo = () => {
        if (selectedRepo) {
            return stringToArray(code, "\n").map((line) => <Code>{line}</Code>)
        }
        return <></>
    }

    const copyFromParameter = () => {
        navigator.clipboard.writeText(code)
    }

    return (
        <Container>
            <span>{title}</span>
            {handleSelectedRepo()}
            <Copy onClick={copyFromParameter}>Copy</Copy>
        </Container>
    )
}

export default Box