import { combineReducers } from 'redux';
import { createStore } from 'redux';

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
  window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
)
