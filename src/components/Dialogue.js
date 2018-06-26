import React from 'react';
import { playableCharacterDataURIs } from '../imageAssets/playableSprites.js'
import { npcDataURIs } from '../imageAssets/npcSprites.js'
import { dialogueAssetDataURIs } from '../imageAssets/dialogueAssets.js'
import { playerOptions, npcResponses } from '../dialogueScripts/opening.js'
import '../styles/Dialogue.css';

export const Dialogue = ({
    background,
    character,
    protagonistTag,
    bodyguardTag,
    npcTag,
    selected,
    playerSpeech,
    npcSpeech,
    availableOptions,
    changeOption,
    selectOption
  }) => {

  const playerDisplayedOption = playerOptions[playerSpeech];

  const npcParagraphs = npcResponses[npcSpeech].map((paragraph) =>
    <p className="speakerText">
      {paragraph}
    </p>
  );

  let displayedOptions = []

  for (let i = 0; i < availableOptions.length; i++) {
    displayedOptions.push(playerOptions[availableOptions[i]])
  }

  const listItems = displayedOptions.map((option, index) =>
    <div className="optionRow">
      <div>
        <img src={dialogueAssetDataURIs['arrow']} className="optionsArrow" style={selected == index ? {} : {visibility:'hidden'}}/>
      </div>
      <div>
        <p>{option}</p>
      </div>
    </div>
  );

  const handleKeyDown = (e) => {
    let key = e.key;
    if (key == 'ArrowUp' || key == 'ArrowDown')
    {
      changeOption(key)
    }
    else if (key == 'Enter')
    {
      selectOption(availableOptions[selected])
    }
  }

  return (
    <div tabIndex="0" onKeyDown={handleKeyDown}>

      <img src={dialogueAssetDataURIs[background]} id="background"/>

      <img src={playableCharacterDataURIs[character][protagonistTag]} id="protagonist"/>
      <img src={playableCharacterDataURIs[character][bodyguardTag]} id="playerBodyguardOne"/>
      <img src={playableCharacterDataURIs[character][bodyguardTag]} id="playerBodyguardTwo"/>

      <img src={npcDataURIs[npcTag]} id="npc"/>


      <div id="playerTextBox">
        <div className="innerTextBox">
          <div className="speakerPortrait">
            <img src={dialogueAssetDataURIs['arrow']}/>
          </div>
            <p className="speakerText">
              {playerDisplayedOption}
            </p>
        </div>
      </div>

      <div id="npcTextBox">
        <div className="innerTextBox">
          <div className="speakerPortrait">
            <img src={dialogueAssetDataURIs['arrow']}/>
          </div>
          {npcParagraphs}
        </div>
      </div>

      <div id="optionsBox">
        <div className="innerTextBox">
          <div>{listItems}</div>
        </div>
      </div>

    </div>
  )
}
