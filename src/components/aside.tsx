import React from 'react'
import styled from 'styled-components';
import Repos from '../types/repos';
import { BACKGROUND } from '../constants/colors'

const Container = styled.div`
    display:flex;
    width: 200px;
    background: ${BACKGROUND};
`;

const RepoComponent = styled.li`
    width: 100%;
    color: rgb(213, 0, 102);
    font-weight: bold;
    padding: 10px 15px;
    margin: 5px 0px;
    cursor: pointer;
    background: rgb(250, 210, 225);;
    border-radius: 10px;
    :hover {
        background: white;
    }
`;

const Title = styled.h5`
    padding: 10px;
    width: 100%;
    text-align: center;
`;

type AsideProps = {
    handleSelectedRepo: (repo: Repos) => void
    isFetching: boolean
    repos: Repos[]
    isSearching: boolean
}



const Aside = ({ handleSelectedRepo, isFetching, repos, isSearching }: AsideProps) => {

    const renderRepos = () => {
        return (
            <ul style={{ listStyle: "none", padding: 5 }}>
                {
                    repos.map(x => {
                        return (
                            <RepoComponent onClick={() => { handleSelectedRepo(x) }}>
                                {x.title}
                            </RepoComponent>
                        )
                    })
                }
            </ul>)
    }

    return (
        <Container>
            <div style={{ display: 'flex', flexDirection: 'column' , width: "100%"}} className="">
                <Title>Your Repos</Title>
                {
                    isFetching ? <h6>Loading...</h6> : renderRepos()
                }
                {
                    isSearching ? <h6>Searching...</h6> : <></>
                }
            </div>
        </Container>
    )
}

export default Aside
