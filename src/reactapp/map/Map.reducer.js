import {
  SCROLL_MAP,
} from './Map.actions'

export function map(
  map = {
    xOffset: 0,
    yOffset: 0
  },
  action) {

  switch (action.type) {

    case SCROLL_MAP:

      if (action.key == "ArrowUp")
      {
        return Object.assign({}, map, { yOffset: map.yOffset + 1 })
      }

      if (action.key == "ArrowDown")
      {
        return Object.assign({}, map, { yOffset: map.yOffset - 1 })
      }

      if (action.key == "ArrowLeft")
      {
        return Object.assign({}, map, { xOffset: map.xOffset + 1 })
      }

      if (action.key == "ArrowRight")
      {
        return Object.assign({}, map, { xOffset: map.xOffset - 1 })
      }


    default:
      return map

  }

}
