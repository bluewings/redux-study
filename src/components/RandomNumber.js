import React from 'react'

class RandomNumber extends React.Component {
  _update () {
    console.log(this)
    this.props.onUpdate()
  }
  constructor (props) {
    super(props)
    this._update = this._update.bind(this)
  }

  render () {
    return (
      <div>
        <h3>random number component</h3>
        <h4>RANDOM NUMBER {this.props.number}</h4>
        <button onClick={this.props.onUpdate}>
          update
        </button>
      </div>
    )
  }
}

RandomNumber.defaultProps = {
  number: 0
}
export default RandomNumber
