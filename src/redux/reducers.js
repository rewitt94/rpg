import { combineReducers } from 'redux'

import {
  npcResponses,
  playerOptions
} from '../dialogueScripts/opening'

import {
  CHANGE_OPTION,
  SELECT_OPTION,
  SELECT_PLAYER,
  SELECT_NPC_RESPONSE,
  ANIMATE_NPC
} from './actions'

function dialogue(
  dialogue = {
    background: 'astral',
    character: 'slime',
    protagonistTag: 'protagonist',
    bodyguardTag: 'bodyguard',
    npcTag: 'creator',
    playerSpeech: 0,
    npcSpeech: 0,
    availableOptions: [1,2,3,4],
    selected: 0
  },
  action) {

  switch (action.type) {

    case CHANGE_OPTION:

      if (action.key == "ArrowDown" && dialogue.selected < dialogue.availableOptions.length - 1)
      {
        return Object.assign({}, dialogue, { selected: dialogue.selected + 1 })
      }

      else if (action.key == "ArrowUp" && dialogue.selected > 0)
      {
        return Object.assign({}, dialogue, { selected: dialogue.selected - 1 })
      }
      else
      {
        return dialogue
      }

    case SELECT_OPTION:

      return Object.assign({}, dialogue, { playerSpeech: action.optionId })

    case SELECT_PLAYER:

      return Object.assign({}, dialogue, { character: action.player })

    case SELECT_NPC_RESPONSE:

      return Object.assign({}, dialogue, { npcSpeech: action.responseId })

    case ANIMATE_NPC:

      return Object.assign({}, dialogue, { npcTag: action.frame })


    default:
      return dialogue
  }

}

export const reducer = combineReducers({
  dialogue: dialogue
})
