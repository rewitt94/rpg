import { combineReducers } from 'redux'
import { dialogue } from './dialogue/Dialogue.reducer.js'
import { map } from './map/Map.reducer.js'

export const reducer = combineReducers({
  map: map,
  dialogue: dialogue
})
