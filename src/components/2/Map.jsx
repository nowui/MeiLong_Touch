import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Spin } from 'antd'
import Helper from '../../common/Helper'
import styles from './detail.less'

let self

class Map extends Component {

  constructor(props) {
    super(props)

    self = this

    this.state = {
      isLoad: false
    }
  }

  componentDidMount() {

  }

  onClickBack() {
    event.preventDefault()

    self.props.router.goBack()
  }

  render() {

    return (
      <Spin size="large" spinning={this.state.isLoad}>
        <img src={Helper.host + self.props.params.url} style={{width: '100%'}} />
        <div className={styles.back} onClick={this.onClickBack.bind(this)}></div>
      </Spin>
    )
  }
}

export default withRouter(Map)