import {
  selectOption,
  selectPlayer,
  animateNpc,
  selectNpcResponse,
  addOption,
  removeOption
} from '../Dialogue.actions.js'

export const npcResponses = {
  0:[
      "Welcome, to life. My greatest creation.",
      "Please realise that you may need to scroll down on the dialogue boxes as I have a terrible habit of talking too much. Sqawk Sqawk!",
      "Your story is that of a ruler who leads a band of refugees into the new world. The balad of a beloved ruler or the tale of terrible tyrant. You decide.",
      "Click on the options box & use Up, Down and Enter to choose; Who do you wish to be? Sqawk sqawk sqawk!"
    ],
  1:[
      "So it shall be.",
      "A century of drought has reduced the lands you once roamed to arid dust. You became your tribe's chief with the promise of leading them over the mountains into the new world.",
      "You people may lack some decorum, but they are hardy and know how to live off the land.",
      "Now it is time to bury the past and secure a future for your people in the new world."
    ],
  2:[
      "Ofcourse.",
      "You were chased from your own castle by your owns cousins, scared by your rightful claim for the throne. Fortunately, your faithful subjects would follow you to the ends of the earth.",
      "Your numbers are few, but well provisioned. You are a lady of the court. Born, raised and educated to lead.",
      "Now it is time to bury the past and secure a future for your people in the new world."
    ],
  3:[
      "As you wish.",
      "Your kingdom only recently had been greater than any above the surface. A underground volcano shattered your stone streets and chased your people to the lands above.",
      "You lead a your hungry horde from beneath the earth. Can you settle your people amongst these human savages?",
      "Now it is time to bury the past and secure a future for your people in the new world."
    ],
  4:[
    "The risk of the wrong decision is preferable to indecision, my friend."
    ],
}

export const playerOptions = {
  0: "Glug. Glug. Glug.",
  1: "I shall be the Nomad Chief.",
  2: "I shall be the Exiled Princess.",
  3: "I shall be the Goblin King.",
  4: "Actually, I changed my mind.",
  5: "I'm ready. Let's do this."
}

export const dialogueActions = {
  0: (dispatch,optionId) => (dispatch(selectOption(optionId))),
  1: (dispatch,optionId) => {
    dispatch(selectOption(optionId))
    dispatch(selectNpcResponse(1))
    characterSelect(dispatch, 'nomadChief')
  },
  2: (dispatch,optionId) => {
    dispatch(selectOption(optionId))
    dispatch(selectNpcResponse(2))
    characterSelect(dispatch, 'exiledPrincess')

  },
  3: (dispatch,optionId) => {
    dispatch(selectOption(optionId))
    dispatch(selectNpcResponse(3))
    characterSelect(dispatch, 'goblinKing')
  },
  4: (dispatch,optionId) => {
    dispatch(selectOption(optionId))
    dispatch(selectNpcResponse(4))
    dispatch(addOption(1))
    dispatch(addOption(2))
    dispatch(addOption(3))
    dispatch(removeOption(4))
    dispatch(removeOption(5))
    setTimeout(() => dispatch(animateNpc('creatorA1')), 250)
    setTimeout(() => dispatch(animateNpc('creatorA2')), 500)
    setTimeout(() => dispatch(selectPlayer('slime')), 500)
    setTimeout(() => dispatch(animateNpc('creator')), 1000)
  }
}

function characterSelect(dispatch, character) {
  dispatch(removeOption(1))
  dispatch(removeOption(2))
  dispatch(removeOption(3))
  dispatch(addOption(4))
  dispatch(addOption(5))
  setTimeout(() => dispatch(animateNpc('creatorA1')), 250)
  setTimeout(() => dispatch(animateNpc('creatorA2')), 500)
  setTimeout(() => dispatch(selectPlayer(character)), 500)
  setTimeout(() => dispatch(animateNpc('creator')), 1000)
}
