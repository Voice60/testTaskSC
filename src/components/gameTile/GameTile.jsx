import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { setGame } from '../../redux/gamesReducer'

const Wrapper = styled.div`
    display: flex;
    width: 150px;
    flex-direction: column;
    margin: 0 15px 15px 15px;
    border: 1px solid #000;
    background-color: #ddd;
  `
const Img = styled.img`
    width: 100%;
  `

const GameTitle = styled.p`
    text-align: center
  `
const GameTile = ({ id, title }) => {
  let navigate = useNavigate()
  let dispatch = useDispatch()

  return (
    <Wrapper>
      <Img onClick={() => {
        dispatch(setGame(id))
        navigate(`/game`)
      }} src={`https://cdn2.softswiss.net/i/s2/${id}.png`} alt={title} />
      <GameTitle>{title}</GameTitle>
    </Wrapper>
  )
}

export default GameTile
