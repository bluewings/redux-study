import React from 'react'
import update from 'react-addons-update'
import Board from './Board'
import { BOARD_SIZE, WHITE, BLACK } from '../resources/constant.yml'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      rows: new Array(BOARD_SIZE)
        .fill(new Array(BOARD_SIZE).fill(null)),
      turn: BLACK,
      seq: 0
    }
  }
  onStonePlace (x, y) {
    if (!this.state.rows[y][x]) {
      let nextSeq = this.state.seq + 1
      this.setState({
        rows: update(this.state.rows, {
          [y]: {
            [x]: {
              $set: {
                color: this.state.turn,
                seq: nextSeq
              }
            }
          }
        }),
        turn: this.state.turn === BLACK ? WHITE : BLACK,
        seq: nextSeq
      })
    }
  }
  render () {
    return (
      <div>
        <Board rows={this.state.rows} turn={this.state.turn} onStonePlace={this.onStonePlace.bind(this)} />
      </div>
    )
  }
}

export default App
