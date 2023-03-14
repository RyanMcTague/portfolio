import { useState } from 'react'
import styled from 'styled-components'
import HelloButton from '../components/HelloButton'
import Theme, { ITheme } from '../config/theme'

interface WrapperProps{
  color: keyof ITheme
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${({color}) => Theme[color]};
`

const ButtonContainer = styled.div`
  padding: 3rem;
`

const PageTitle = styled.h1`
  font-size: 1.5rem;
  color: ${Theme.lightest};
`

const Home: React.FC = () => {

  const [index, setIndex] = useState<number>(0)

  const handleClick = () => {
    setIndex(index === Object.keys(Theme).length - 1 ? 0 : index + 1)
  }

  const getKey = () =>{
    return Object.entries(Theme).find(([k, v], i) => i === index)![0] as keyof ITheme
  }

  return (
    <Wrapper color={getKey()}>
      <PageTitle>Ryan McTague</PageTitle>
      <ButtonContainer>
        <HelloButton onClick={() => handleClick()}/>
      </ButtonContainer>
    </Wrapper>
  )
}

export default Home
