import React from 'react'
import { connect } from 'react-redux'
import Board from './Board'
import { reset } from '../actions'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.onReset = this.onReset.bind(this)
  }
  render () {
    return (
      <div>
        <Board rows={this.props.rows} />
        <button onClick={this.onReset}>
          reset
        </button>
      </div>
    )
  }
  onReset () {
    this.props.onReset()
  }
}

let mapStateToProps = (state) => {
  return {
    rows: state.go.rows
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onReset: () => dispatch(reset())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
