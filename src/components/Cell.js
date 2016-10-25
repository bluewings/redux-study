import React from 'react'
import Stone from './Stone'
import styles from './Cell.scss'
import { WHITE, BLACK } from '../resources/constant.yml'

class Cell extends React.Component {
  placeStone () {
    this.props.onStonePlace(this.props.x, this.props.y)
  }
  render () {
    return (
      <div className={styles.container + ' ' + (this.props.cell ? '' : (this.props.turn === WHITE ? styles.white : styles.black))} onClick={this.placeStone.bind(this)}>
        {this.props.cell ? <Stone stone={this.props.cell} /> : ''}
      </div>
    )
  }
}

export default Cell
