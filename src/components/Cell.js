import React from 'react'
import { connect } from 'react-redux'
import Stone from './Stone'
import styles from './Cell.scss'
import { WHITE, BLACK } from '../resources/constant.yml'
import { placeStone } from '../actions'

class Cell extends React.Component {
  constructor (props) {
    super(props)
    this.onPlaceStone = this.onPlaceStone.bind(this)
  }
  render () {
    return (
      <div className={styles.container + ' ' + (this.props.cell ? '' : (this.props.turn === WHITE ? styles.white : styles.black))} onClick={this.onPlaceStone}>
        {this.props.cell ? <Stone stone={this.props.cell} /> : ''}
      </div>
    )
  }
  onPlaceStone () {
    this.props.onPlaceStone(this.props.x, this.props.y)
  }
}

let mapStateToProps = (state) => {
  return {
    turn: state.go.turn
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onPlaceStone: (x, y) => dispatch(placeStone(x, y))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
