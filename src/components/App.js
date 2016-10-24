import React from 'react'
import update from 'react-addons-update'
import Board from './Board'

const SIZE = 10

const WHITE = 1
const BLACK = 2

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      rows: new Array(SIZE)
        .fill(new Array(SIZE).fill(0))
    }
  }
  onPlaceStone (x, y) {
    console.log(this)
    console.log(this.state.rows[y][x])
    if (this.state.rows[y][x] === 0) {
      this.setState({
        rows: update(this.state.rows, {
          [y]: {
            [x]: {
              $set: WHITE
            }
          }
        })
      })
    }
  }
  render () {
    return (
      <Board rows={this.state.rows} onPlaceStone={this.onPlaceStone.bind(this)} />
    )
  }
}

export default App