import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import GamePage from "./components/GamePAge/GamePage";
import GameTile from "./components/gameTile/GameTile";
import gamesData from './data/games.json'
import { addGames } from './redux/gamesReducer'

import './App.css';

function App() {
  const [currency, setCurrency] = useState('Валюта')
  const [provider, setProvider] = useState('Провайдер')
  const [ArrayLength, setArrayLength] = useState(12)
  const games = useSelector(state => state.games.games)

  let gamesArray = Object.keys(games)
  gamesArray.sort((a, b) => { return games[a].collections.popularity - games[b].collections.popularity })
  if (currency !== 'Валюта') {
    gamesArray = gamesArray.filter(game => {
      return Object.keys(games[game].real).includes(currency)
    })
  }

  if (provider !== 'Провайдер') {
    gamesArray = gamesArray.filter(game => {
      return games[game].provider === provider
    })
  }

  let currencyArray = []
  Object.keys(games).forEach((game) => {
    let arr = Object.keys(games[game].real)
    arr.forEach(e => {
      if (!currencyArray.includes(e)) {
        currencyArray.push(e)
      }
    })
  })

  let providerArray = []
  Object.keys(games).forEach((game) => {
    let p = games[game].provider
    if (!providerArray.includes(p)) {
      providerArray.push(p)
    }
  })

  gamesArray = gamesArray.slice(0, ArrayLength)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addGames(gamesData))
  }, [])

  const showMore = () => {
    setArrayLength((prev => prev + 12))
  }

  const Container = styled.div`
    box-sizing: border-box;
    max-width: 1170px;
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
  `

  const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 15px;
  `

  const More = styled.button`
    padding: 10px 15px;
    border: 1px solid #000;
    background-color: #ddd;
    margin: 0 auto;
  `
  const Select = styled.select`
    padding: 10px 15px;
    border: 1px solid #000;
    background-color: #ddd;
    width: 150px;
    margin: 0 20px 20px 20px;
  `

  const MainPage = () => {
    return (
      <>
        <div>
          <Select onChange={(e) => {
            setArrayLength(12)
            setCurrency(e.target.value)
          }} value={currency}>
            <option value='Валюта'>Валюта</option>
            {currencyArray.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </Select>
          <Select onChange={(e) => {
            setArrayLength(12)
            setProvider(e.target.value)
          }} value={provider}>
            <option value='Провайдер'>Провайдер</option>
            {providerArray.map((p, i) => (
              <option key={i} value={p}>{p}</option>
            ))}
          </Select>
        </div>
        <Main>
          {gamesArray.length !== 0 && gamesArray.map(game => (
            <GameTile key={game} id={game} title={games[game].title} />
          ))}
        </Main>
        <More onClick={showMore}>Показать ещё</More>
      </>
    )
  }

  return (
    <>
      <Container>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </Container>
    </>
  )
}

export default App;
