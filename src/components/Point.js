import React from 'react'

class Point extends React.Component {
  placeStone () {
    this.props.onPlaceStone(this.props.x, this.props.y)
  }
  render () {
    return (
      <li onClick={this.placeStone.bind(this)}>
        {this.props.stone}
      </li>
    )
  }
}

export default Point
