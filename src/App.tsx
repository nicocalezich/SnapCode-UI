import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Modal from './components/create-modal'
import reposService from './services/repos'
import Repos from './types/repos';
import Aside from './components/aside'
import Box from './components/box'

const Container = styled.div`
  display:flex;
  flex-direction: column;
`;

const MainContent = styled.div`
height: 200vh;
  justify-content: space-between;
  display:flex;
  flex-direction: column;
  flex:1;
`;

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [selectedRepo, setSelectedRepo] = useState(null as any as Repos)
  const [repos, setRepos] = useState([] as any as Repos[])
  const [isFetching, setIsFetching] = useState(true)

  const getRepos = async () => {
    const resp = await reposService.getRepos()
    setIsFetching(false)
    setRepos(resp as any)
  }

  useEffect(() => {
    getRepos()
  }, [])


  const handleClose = () => {
    setIsOpen(!isOpen)
  }

  const createRepo = async (body: Repos) => {
    await reposService.postRepos(body)
    setRepos([...repos, body])
  }

  const handleSelectedRepo = (repo: Repos) => {
    setSelectedRepo(repo)
}

  return (
    <Container>
      <Navbar setIsOpen={setIsOpen} />
      <div style={{ display: 'flex' }}>
        <Aside isFetching={isFetching} repos={repos}  handleSelectedRepo={handleSelectedRepo}/>
        <div style={{display: 'flex', flex:1}}>
          <MainContent>
            <Box selectedRepo={selectedRepo}/>
            <Footer />
            <Modal isOpen={isOpen} handleClose={handleClose} createRepos={createRepo} />
          </MainContent>
        </div>
      </div>

    </Container>

  );
}

export default App;
