export const CHANGE_OPTION = 'CHANGE_OPTION';
export const SELECT_OPTION = 'SELECT_OPTION';
export const SELECT_PLAYER = 'SELECT_PLAYER';
export const REMOVE_OPTION = 'REMOVE_OPTION';
export const ADD_OPTION = 'ADD_OPTION';
export const SELECT_NPC_RESPONSE = 'SELECT_NPC_RESPONSE';
export const ANIMATE_NPC = 'ANIMATE_NPC';

export function changeOption(key) {
  return {
    type: CHANGE_OPTION,
    key
  }
}

export function selectOption(optionId) {
  return {
    type: SELECT_OPTION,
    optionId
  }
}

export function selectPlayer(player) {
  return {
    type: SELECT_PLAYER,
    player
  }
}

export function removeOption(optionId) {
  return {
    type: REMOVE_OPTION,
    optionId
  }
}

export function addOption(optionId) {
  return {
    type: ADD_OPTION,
    optionId
  }
}

export function selectNpcResponse(responseId) {
  return {
    type: SELECT_NPC_RESPONSE,
    responseId
  }
}

export function animateNpc(frame) {
  return {
    type: ANIMATE_NPC,
    frame
  }
}
