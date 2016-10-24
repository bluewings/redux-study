import React from 'react'
import styles from './Point.scss';

class Point extends React.Component {
  placeStone () {
    this.props.onPlaceStone(this.props.x, this.props.y)
  }
  render () {
    return (
      <li onClick={this.placeStone.bind(this)} className={styles.container}>
        <em>{(this.props.stone ? this.props.stone : '')}</em>
      </li>
    )
  }
}

export default Point
