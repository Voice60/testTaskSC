const ADD_GAMES = 'ADD_GAMES'
const SET_GAME = 'SET_GAME'

let initialState = {
  games: {},
  currentGame: null,
}

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GAMES:
      return {
        ...state,
        games: action.games,
      }
    case SET_GAME:
      return {
        ...state,
        currentGame: action.game
      }
    default:
      return state
  }
}

export const addGames = (games) => ({ type: ADD_GAMES, games })
export const setGame = (game) => ({ type: SET_GAME, game })

export default gamesReducer;