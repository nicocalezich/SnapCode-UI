import React from 'react'
import styled from 'styled-components';
import Repos from '../types/repos';

const Container = styled.div`
    display: block;
    padding: 10px;
    width: 100%;
    height: 100%;
    background: #DFDEDE;
`;

type BoxProps = {
    selectedRepo: Repos
}

const Box = ({selectedRepo}: BoxProps) => {
    return (
        <Container>
            <span>{selectedRepo?.title}</span>
            <p>{selectedRepo?.code}</p>
        </Container>
    )
}

export default Box