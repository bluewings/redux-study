import React from 'react'
import Row from './Row'
import styles from './Board.scss'

class Board extends React.Component {
  render () {
    return (
      <div className={styles.container}>
        {this.props.rows.map((cells, y) => <Row
                                             key={y}
                                             y={y}
                                             cells={cells}
                                             turn={this.props.turn}
                                             onStonePlace={this.props.onStonePlace} />)}
      </div>
    )
  }
}

export default Board
