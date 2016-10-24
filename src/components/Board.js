import React from 'react'
import Point from './Point'
import styles from './Board.scss';

console.dir(styles);
console.log(styles.container)

class Board extends React.Component {
  render () {
    return (
      <div className={styles.container}>
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
