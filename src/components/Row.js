import React from 'react'
import Cell from './Cell'
import styles from './Row.scss'

class Row extends React.Component {
  render () {
    return (
      <div className={styles.container}>
        {this.props.cells.map((cell, x) => <Cell
                                             key={x}
                                             x={x}
                                             y={this.props.y}
                                             cell={cell} />)}
      </div>
    )
  }
}

export default Row
