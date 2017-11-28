import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import {familyReducer} from './familyReducer.js'
import {genreReducer} from './genreReducer.js'
import {instrumentReducer} from './instrumentReducer.js'
import {userReducer} from './userReducer.js'
import {postReducer} from './postReducer.js'
import {tagReducer} from './tagReducer.js'

const rootReducer = combineReducers({
  users: userReducer,
  families: familyReducer,
  genres: genreReducer,
  instruments: instrumentReducer,
  posts: postReducer,
  tags: tagReducer
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
