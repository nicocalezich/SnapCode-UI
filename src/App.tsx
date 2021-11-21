import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Modal from './components/create-modal'
import reposService from './services/repos'
import Repos from './types/repos';

const Main = styled.div`
height: 200vh;
justify-content: space-between;
  display:flex;
  flex-direction: column;
`;

function App() {

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    getRepos()
  }, [])

  const handleClose = () => {
      setIsOpen(!isOpen)
  }

  const createRepo = async (body: Repos) => {
    await reposService.postRepos(body)
  }

  const getRepos = async () => {
    const repos = await reposService.getRepos()
    console.log(repos);
  }


  return (
    <Main>
      <Navbar setIsOpen={setIsOpen} />
      <Footer />
      <Modal isOpen={isOpen} handleClose={handleClose} createRepos={createRepo} />
    </Main>
  );
}

export default App;
