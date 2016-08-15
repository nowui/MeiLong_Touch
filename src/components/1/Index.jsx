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

    self.props.router.push({
      pathname: '/1/detail/' + index,
      query: {

      }
    })
  }

  onClickBack() {
    event.preventDefault()

    self.props.router.goBack()
  }

  render() {
    return (
      <div className={styles.bg}>
        <div className={styles.menu_0} onClick={this.onClickMenu.bind(this, 64)}></div>
        <div className={styles.menu_1} onClick={this.onClickMenu.bind(this, 65)}></div>
        <div className={styles.menu_2} onClick={this.onClickMenu.bind(this, 66)}></div>
        <div className={styles.menu_3} onClick={this.onClickMenu.bind(this, 67)}></div>
        <div className={styles.menu_4} onClick={this.onClickMenu.bind(this, 68)}></div>
        <div className={styles.back} onClick={this.onClickBack.bind(this)}></div>
      </div>
    )
  }
}

export default withRouter(Index)