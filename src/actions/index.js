export const RESET = 'RESET'
export const PLACE_STONE = 'PLACE_STONE'

export function reset () {
  return {
    type: RESET
  }
}

export function placeStone (x, y) {
  return {
    type: PLACE_STONE,
    x: x,
    y: y
  }
}
