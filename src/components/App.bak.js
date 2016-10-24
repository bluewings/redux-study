import React from 'react'
import Header from './Header'
import Content from './Content'
import RandomNumber from './RandomNumber'

class App extends React.Component {
  constructor (props) {
    super(props)
    // console.log(props)
    this.state = {
      items: [0, 1, 0, 0]
    }
  }
  check (index, event) {
    // console.log('>>> check')
    // console.log(index, event)

    let newItems = this.state.items.slice()
    // console.log(newItems)
    newItems[index]++

    // // console.log(newItems[index])

    this.setState({
      items: newItems
    })
  }
  sayHey () {
    alert('hey')
  }
  _updateValue (RandomNumber) {
    console.log('update prop')
    console.log(this)

    this.setState({
      value: parseInt(Math.random() * 10000, 10)
    })
  }

  render () {
    let name = 'Albert'
    let styles = {
      color: 'aqua',
      backgroundColor: 'black'
    }
    // let items = [0, 0, 0, 0]
    return (
      <div>
        <Header />
        <RandomNumber number={this.state.value} onUpdate={this._updateValue.bind(this)} />
        <ul>
          {this.state.items.map((item, index) => <li key={index} onClick={(event) => this.check(index, event)}><button>{item}</button></li>)}
        </ul>
        {/* comments */}
        <h1>Hello React Skeleton. {name}!</h1>
        <button style={styles} onClick={this.sayHey}>
          Click Me
        </button>
      </div>
    )
  }
}

App.defaultProps = {
  // headerTitle: 'Default header',
  // contentTitle: 'Default contentTitle',
  // contentBody: 'Default contentBody'
}

App.propTypes = {
  // title: React.PropTypes.string,
  // body: React.PropTypes.string.isRequired  
}

export default App
