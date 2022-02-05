import styled from 'styled-components';
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
        <Container className="">
            <div style={{ display: 'flex', flexDirection: 'column' }} className="">
                <h6 className="" style={{ padding: 10 }}>Repos</h6>
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
