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

  const handleClose = () => {
    setIsOpen(!isOpen)
  }

  const createRepo = async (body: Repos) => {
    await reposService.postRepos(body)
  }

  return (
    <Container>
      <Navbar setIsOpen={setIsOpen} />
      <div style={{ display: 'flex' }}>
        <Aside />
        <div style={{display: 'flex', flex:1}}>
          <MainContent>
            <Footer />
            <Modal isOpen={isOpen} handleClose={handleClose} createRepos={createRepo} />
          </MainContent>
        </div>
      </div>

    </Container>

  );
}

export default App;
