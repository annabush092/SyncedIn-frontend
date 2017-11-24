import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import {familyReducer} from './familyReducer.js'
import {genreReducer} from './genreReducer.js'
import {instrumentReducer} from './instrumentReducer.js'
import {userReducer} from './userReducer.js'

const rootReducer = combineReducers({
  users: userReducer,
  families: familyReducer,
  genres: genreReducer,
  instruments: instrumentReducer
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
