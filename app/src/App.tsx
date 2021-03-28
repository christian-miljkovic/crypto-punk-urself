import React, { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { generatePunk } from './generate-punk'
import { PunkCodes } from './generate-punk'
import clone from 'lodash/fp/clone'
import { Toggle } from './components/Toggle'

const PUNK_CODE_RANGE: PunkCodeRange = {
  accessory: [1, 2],
  beard: [1, 8],
  ears: [1, 4],
  eyes: [1, 5],
  face: [1, 2],
  hair: [1, 12],
  mouth: [1, 6],
  nose: [1, 2],
}

const initialPunkCodes = {
  accessory: 1,
  beard: 1,
  ears: 1,
  eyes: 1,
  face: 1,
  hair: 1,
  mouth: 1,
  nose: 1,
}

type PunkCodeRange = {
  [key: string]: number[]
}

type UpdatePunkParams = {
  partName: string
  isLeft: boolean
}

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

const StyledContainer = styled.div`
  display: flex;
  text-align: center;
  background-color: #6f42f5;
  justify-content: center;
  /* flex-direction: column; */
`

const StyledSideBar = styled.div`
  justify-content: flex-start;
`

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

  function setPartCode(partName: string, value: number) {
    const partNameStr = partName.toString()
    if (value > PUNK_CODE_RANGE[partNameStr][1])
      return PUNK_CODE_RANGE[partNameStr][0]
    else if (value < PUNK_CODE_RANGE[partNameStr][0])
      return PUNK_CODE_RANGE[partNameStr][1]
    return value
  }

  function updatePunk({ partName, isLeft }: UpdatePunkParams): void {
    if (partName.toString() in punkCodes) {
      const newPunkCodes = clone(punkCodes)
      const partNameStr = partName.toString()
      const value = isLeft
        ? newPunkCodes[partNameStr] - 1
        : newPunkCodes[partNameStr] + 1
      newPunkCodes[partNameStr] = setPartCode(partNameStr, value)
      setPunkCodes(newPunkCodes)
    }
  }

  function handleClick(partName: string, isLeft: boolean): void {
    updatePunk({ partName, isLeft })
  }

  return (
    <StyledContainer>
      <StyledSideBar>
        <Toggle attribute="accessory" onClick={handleClick} />
        <Toggle attribute="beard" onClick={handleClick} />
        <Toggle attribute="ears" onClick={handleClick} />
        <Toggle attribute="eyes" onClick={handleClick} />
      </StyledSideBar>
      <StyledHeader>
        {punk && <img src={punk} alt="punk" />}
        <h2>Crypto Punk Urself</h2>
      </StyledHeader>
      <StyledSideBar>
        <Toggle attribute="face" onClick={handleClick} />
        <Toggle attribute="hair" onClick={handleClick} />
        <Toggle attribute="mouth" onClick={handleClick} />
        <Toggle attribute="nose" onClick={handleClick} />
      </StyledSideBar>
    </StyledContainer>
  )
}

export default App
