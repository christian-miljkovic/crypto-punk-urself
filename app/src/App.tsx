import React from 'react'
import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'

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

function App() {
  return (
    <div className="App">
      <StyledHeader>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Crypto Punk Urself</h2>
      </StyledHeader>
    </div>
  )
}

export default App
