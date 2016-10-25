import { combineReducers } from 'redux'
import update from 'react-addons-update'
import { RESET, PLACE_STONE } from '../actions'
import { BOARD_SIZE, WHITE, BLACK } from '../resources/constant.yml'

/*
{
  rows: [
    [ . . . ],
    [ . . . ],
    [ . . . ]
  ],
  turn: 'BLACK',
  seq: 0
}
*/
const initialState = {
  rows: new Array(BOARD_SIZE)
    .fill(new Array(BOARD_SIZE).fill(null)),
  turn: BLACK,
  seq: 0
}

const go = (state = initialState , action) => {
  switch (action.type) {
    case RESET:
      return Object.assign({}, initialState)

    case PLACE_STONE:
      let { x, y } = action
      if (!state.rows[y][x]) {
        let nextSeq = state.seq + 1
        return Object.assign({}, {
          rows: update(state.rows, {
            [y]: {
              [x]: {
                $set: {
                  color: state.turn,
                  seq: nextSeq
                }
              }
            }
          }),
          turn: state.turn === BLACK ? WHITE : BLACK,
          seq: nextSeq
        })
      }
      return state

    default:
      return state
  }
}

export default combineReducers({go})
