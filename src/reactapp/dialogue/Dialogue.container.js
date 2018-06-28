import { connect } from 'react-redux';
import { changeOption, selectOption } from './Dialogue.actions'
import { Dialogue } from './Dialogue';
import { dialogueActions } from './scriptedEvents/opening.js'

const mapStateToProps = state => {
  return {
    background: state.dialogue.background,
    character: state.dialogue.character,
    protagonistTag: state.dialogue.protagonistTag,
    bodyguardTag: state.dialogue.bodyguardTag,
    npcTag: state.dialogue.npcTag,
    playerSpeech: state.dialogue.playerSpeech,
    npcSpeech: state.dialogue.npcSpeech,
    availableOptions: state.dialogue.availableOptions,
    selected: state.dialogue.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeOption:(key) => dispatch(changeOption(key)),
    selectOption:(optionId) => dialogueActions[optionId](dispatch,optionId)
  }
}

export const DialogueContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogue)
