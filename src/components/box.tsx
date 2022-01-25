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
    return (
        <Container>
            <span>{selectedRepo?.title}</span>
            {selectedRepo ? stringToArray(selectedRepo.code, "\n").map((line) => <Code>{line}</Code>) : null}
            <Copy onClick={() => {navigator.clipboard.writeText(selectedRepo.code)}}>Copy</Copy>
        </Container>
    )
}

export default Box