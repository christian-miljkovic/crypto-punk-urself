import styled from 'styled-components'

interface ArrowButtonProps {
  isLeft?: boolean
  onClick: () => void
}

type StyledImageProps = {
  $isLeft: boolean
}

const StyledImage = styled.div<StyledImageProps>`
  transform: ${({ $isLeft }) => ($isLeft ? 'rotate(180deg)' : null)};
  background-color: #6f42f5;
`
const StyledButton = styled.button`
  background-color: #6f42f5;
  width: 50px;
  height: 55px;
  padding: 0px;
  margin: 8px;
`

export function ArrowButton({
  isLeft = false,
  onClick: handleClick,
}: ArrowButtonProps): JSX.Element {
  return (
    <StyledButton onClick={handleClick}>
      <StyledImage $isLeft={isLeft}>
        <img
          src="./arrow_key_pixelated.png"
          alt="arrow button"
          width="100%"
          height="100%"
        />
      </StyledImage>
    </StyledButton>
  )
}
