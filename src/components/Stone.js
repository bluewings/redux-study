import React from 'react'
import styles from './Stone.scss'
import { WHITE, BLACK } from '../resources/constant.yml'

class Stone extends React.Component {
  render () {
    return (
      <div className={styles.container + ' ' + (this.props.stone.color === WHITE ? styles.white : styles.black)}>
        {this.props.stone.seq}
      </div>
    )
  }
}

export default Stone
