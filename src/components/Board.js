import React from 'react'
import Point from './Point'

class Board extends React.Component {
  render () {
    return (
      <div>
        <h1>Board</h1>
        {this.props.rows.map((cols, y) => {
           return (
             <ul key={y}>
               {cols.map((col, x) => {
                  return (
                    <Point
                      key={x}
                      x={x}
                      y={y}
                      stone={col}
                      onPlaceStone={this.props.onPlaceStone} />
                  )}
                )}
             </ul>
           )
         })}
      </div>
    )
  }
}

export default Board
