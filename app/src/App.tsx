import React, { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { generatePunk } from './generate-punk'
import { PunkCodes } from './generate-punk'

const StyledHeader = styled.header`
  background-color: #6f42f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const initialPunkCodes = {
  accessoryCode: 1,
  beardCode: 1,
  earsCode: 1,
  eyesCode: 1,
  faceCode: 1,
  hairCode: 1,
  mouthCode: 1,
  noseCode: 1,
}

function App() {
  const [punkCodes, setPunkCodes] = useState<PunkCodes>(initialPunkCodes)
  const [punk, setPunk] = useState<string>('')

  useEffect(() => {
    createPunk(punkCodes)
  }, [punkCodes])

  async function createPunk(punkCodes: PunkCodes): Promise<void> {
    const punk = await generatePunk(punkCodes)
    setPunk(punk)
  }

  return (
    <div className="App">
      <StyledHeader>
        {punk && <img src={punk} alt="punk" />}
        <h2>Crypto Punk Urself</h2>
      </StyledHeader>
    </div>
  )
}

export default App
