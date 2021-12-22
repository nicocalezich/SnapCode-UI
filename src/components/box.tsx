import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: block;
    padding: 10px;
    width: 100%;
    height: 100%;
    background: #DFDEDE;
`;

const Box = () => {
    return (
        <Container>
            <p>System.out.print("hola mundo")</p>
            <p>System.out.print("hola mundo")</p>
            <p>System.out.print("hola mundo")</p>
        </Container>
    )
}

export default Box