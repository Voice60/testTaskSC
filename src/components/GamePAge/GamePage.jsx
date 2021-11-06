import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 10px 15px;
  border: 1px solid #000;
  background-color: #ddd;
  margin: 0 auto;
  position: absolute;
  top: 15px;
  left: 15px;
`

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
`

const GamePage = () => {
  let navigate = useNavigate()
  const gameId = useSelector(state => state.games.currentGame)
  const game = useSelector(state => state.games.games[gameId])

  return (
    <Container>
      <StyledButton onClick={() => {
        navigate('/')
      }}>На главную</StyledButton>
      <h2>{game.title}</h2>
    </Container>
  )
}

export default GamePage
