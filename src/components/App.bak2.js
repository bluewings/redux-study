import React from 'react'
// import Header from './Header'
// import Content from './Content'
// import RandomNumber from './RandomNumber'
import update from 'react-addons-update'

class App extends React.Component {
  render () {
    return (
      <Contacts />
    )
  }
}

class Contacts extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      contactData: [
        { name: 'Albert', phone: '000-000-0000' },
        { name: 'Emit', phone: '000-000-0000' },
        { name: 'Anna', phone: '000-000-0000' },
        { name: 'Luke', phone: '000-000-0000' }
      ],
      selectedKey: -1,
      selected: {
        name: '',
        phone: ''
      }
    }
  }
  _insertContact (name, phone) {
    console.log(name, phone)
    this.setState(update(this.state, {
      contactData: {
        $push: [{
          name: name,
          phone: phone
        }]
      }
    }))
  }
  _removeContact () {
    if (this.state.selectedKey === -1 || typeof this.state.selectedKey === 'undefined') {
      alert('선택된 항목이 없습니다.')
      return
    }
    this.setState({
      contactData: update(this.state.contactData, {
        $splice: [[this.state.selectedKey, 1]]
      }),
      selectedKey: -1
    })
  }
  _editContact (name, phone) {
    this.setState({
      contactData: update(this.state.contactData, {
        [this.state.selectedKey]: {
          name: { $set: name },
          phone: { $set: phone }
        }
      }),
      selected: {
        name: name,
        phone: phone
      }
    })
  }
  _onSelect (key) {
    // console.log(key)
    if (key === this.state.selectedKey) {
      this.setState({
        selectedKey: -1,
        selected: {
          name: '',
          phone: ''
        }
      })
      return
    }
    this.setState({
      selectedKey: key,
      selected: this.state.contactData[key]
    })
  }
  _isSelected (key) {
    return this.state.selectedKey === key ? true : false
  }
  render () {
    return (
      <div>
        <h3>Contacts</h3>
        <ul>
          {this.state.contactData.map((contact, index) => {
             // return <li key={index}>{contact.name} {contact.phone}</li>
             return <ContactInfo
                      name={contact.name}
                      phone={contact.phone}
                      key={index}
                      contactKey={index}
                      isSelected={this._isSelected.bind(this)(index)}
                      onSelect={this._onSelect.bind(this)} />
           })}
        </ul>
        <ContactCreator onInsert={this._insertContact.bind(this)} />
        <ContactRemover onRemove={this._removeContact.bind(this)} />
        <ContactEditor isSelected={(this.state.selectedKey !== -1)} contact={this.state.selected} onEdit={this._editContact.bind(this)} />
      </div>
    )
  }
}

class ContactInfo extends React.Component {
  handleClick () {
    // console.log(this.props)

    // console.log(this.props.contactKey)
    this.props.onSelect(this.props.contactKey)
  // this.props.onSelect(this.props.)
  }
  shouldComponentUpdate (nextProps, nextState) {
    return JSON.stringify(nextProps) !== JSON.stringify(this.props)
  }
  render () {
    console.log('rendered: ' + this.props.name)
    let getStyle = (isSelect) => {
      if (!isSelect) return
      return {
        backgroundColor: 'yellow'
      }
    }
    return (
      <li style={getStyle(this.props.isSelected)} onClick={this.handleClick.bind(this)}>
        {this.props.name}
        {this.props.phone}
      </li>
    )
  }
}

class ContactRemover extends React.Component {
  handleClick () {
    this.props.onRemove()
  }
  render () {
    return (
      <button onClick={this.handleClick.bind(this)}>
        Delete
      </button>
    )
  }
}

class ContactEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      phone: ''
    }
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      name: nextProps.contact.name,
      phone: nextProps.contact.phone
    })
  }
  handleChange (e) {
    let newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }
  handleClick (e) {
    this.setState({
      name: '',
      phone: ''
    })
    this.props.onEdit(this.state.name, this.state.phone)
  }
  render () {
    return (
      <div>
        <p>
          <input
            type='text'
            name='name'
            placeholder='name'
            value={this.state.name}
            onChange={this.handleChange.bind(this)} />
          <input
            type='text'
            name='phone'
            placeholder='phone'
            value={this.state.phone}
            onChange={this.handleChange.bind(this)} />
          <button onClick={this.handleClick.bind(this)}>
            Edit
          </button>
        </p>
      </div>
    )
  }
}

class ContactCreator extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      phone: ''
    }
  }
  handleChange (e) {
    let nextState = {}
    nextState[e.target.name] = e.target.value
    this.setState(nextState)
  }
  handleClick (e) {
    this.props.onInsert(this.state.name, this.state.phone)
    this.setState({
      name: '',
      phone: ''
    })
  }
  render () {
    return (
      <div>
        <p>
          <input
            type='text'
            name='name'
            placeholder='name'
            value={this.state.name}
            onChange={this.handleChange.bind(this)} />
          <input
            type='text'
            name='phone'
            placeholder='phone'
            value={this.state.phone}
            onChange={this.handleChange.bind(this)} />
          <button onClick={this.handleClick.bind(this)}>
            Insert
          </button>
        </p>
      </div>
    )
  }
}

export default App
