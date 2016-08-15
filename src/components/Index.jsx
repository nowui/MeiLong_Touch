import React, { Component } from 'react'
import { withRouter } from 'react-router'
import styles from './index.less'

let self

class Index extends Component {

  constructor(props) {
    super(props)

    self = this
  }

  componentDidMount() {

  }

  onClickMenu(index) {
    event.preventDefault()

    let url = '/' + index + '/index'

    self.props.router.push({
      pathname: url,
      query: {

      }
    })
  }

  render() {
    return (
    	<div className={styles.bg}>
        <div className={styles.menu_0} onClick={this.onClickMenu.bind(this, 0)}></div>
        <div className={styles.menu_1} onClick={this.onClickMenu.bind(this, 1)}></div>
        <div className={styles.menu_2} onClick={this.onClickMenu.bind(this, 2)}></div>
        <div className={styles.menu_3} onClick={this.onClickMenu.bind(this, 3)}></div>
        <div className={styles.menu_4} onClick={this.onClickMenu.bind(this, 4)}></div>
      </div>
    )
  }
}

export default withRouter(Index)