import styled from 'styled-components'
import { ArrowButton } from '../ArrowButton'

interface ToggleProps {
  attribute: string
  onClick: (arg0: string, arg1: boolean) => void
}

const StyledContainer = styled.div`
  display: flex;
`

export function Toggle({
  onClick: handleClick,
  attribute,
}: ToggleProps): JSX.Element {
  return (
    <>
      <p>{attribute}</p>
      <StyledContainer>
        <ArrowButton
          isLeft
          onClick={() => {
            handleClick(attribute, true)
          }}
        />
        <ArrowButton
          isLeft={false}
          onClick={() => {
            handleClick(attribute, false)
          }}
        />
      </StyledContainer>
    </>
  )
}
