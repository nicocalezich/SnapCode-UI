import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import reposService from '../services/repos';
import Repos from '../types/repos';

const Container = styled.div`
    display:flex;
    width: 200px;
    background: #bfcbd7;
`;

const RepoComponent = styled.li`
    cursor: pointer;
    :hover {
        background:red;
    }
`;

const Aside = () => {

    const [isFetching, setIsFetching] = useState(true)
    const [repos, setRepos] = useState([] as any as Repos[])
    const [selectedRepo, setSelectedRepo] = useState(null as any as Repos)

    useEffect(() => {
        getRepos()
    }, [])

    const renderRepos = () => {
        return (
            <ul style={{ listStyle: "none", padding: 5 }}>
                {
                    repos.map(x => {
                        return (
                            <RepoComponent onClick={() => { setSelectedRepo(x) }}>
                                {x.title}
                            </RepoComponent>
                        )
                    })
                }
            </ul>)
    }

    const getRepos = async () => {
        const resp = await reposService.getRepos()
        setIsFetching(false)
        setRepos(resp as any)
    }



    return (
        <Container className="">
            <div style={{ display: 'flex', flexDirection: 'column' }} className="">
                <h6 className="" style={{ padding: 10 }}>Repos</h6>
                {
                    isFetching ? <h6>Loading...</h6> : renderRepos()
                }
            </div>
        </Container>
    )
}

export default Aside
