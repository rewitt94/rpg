import React from 'react';
import { tileDataURIs } from './imageAssets/tiles.js'
import { map } from './imageAssets/map.js'
import './styles/Map.css';

export const Map = ({
  xOffset,
  yOffset,
  scrollMap
  }) => {

  let rows = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q'];

  let tiles = []

  rows.forEach((letter) => {
    for (let number = 1; number <= 40; number++) {
      tiles.push(map[letter][number])
    };
  });

  const mapJsx = tiles.map((tile) =>
    <img className="mapTile" src={tileDataURIs[tile]}/>
  );

  const handleKeyDown = (e) => {
    let key = e.key;
    if (key.slice(0,5) == 'Arrow')
    {
      scrollMap(key)
    }
  }

  return (
    <div
    id="mapDiv"
    tabIndex="0" onKeyDown={handleKeyDown}
    style={{
      left: xOffset * 10 + 'vh',
      top: yOffset * 10 + 'vh'
    }}>
      {mapJsx}
    </div>
  )
}
