import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Spin } from 'antd'
import Helper from '../../common/Helper'
import styles from './index.less'

let self

class Index extends Component {

  constructor(props) {
    super(props)

    self = this

    this.state = {
      isLoad: false,
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
      f: ''
    }
  }

  componentDidMount() {
    self.load()
  }

  load = function() {
    self.setState({
      isLoad: true
    })

    Helper.ajax({
      url: '/services/djDistrictDescriptions',
      data: {

      },
      success: function(data) {
        for(let i =  0; i < data.length; i++) {
          if(i == 0) {
            self.setState({
              a: data[i].description
            })
          } else if(i == 1) {
            self.setState({
              b: data[i].description
            })
          } else if(i == 2) {
            self.setState({
              c: data[i].description
            })
          } else if(i == 3) {
            self.setState({
              d: data[i].description
            })
          } else if(i == 4) {
            self.setState({
              e: data[i].description
            })
          } else if(i == 5) {
            self.setState({
              f: data[i].description
            })
          }
        }
      },
      complete: function() {
        self.setState({
          isLoad: false
        })
      }
    })
  }

  onClickMenu(id) {
    event.preventDefault()

    self.props.router.push({
      pathname: '/2/detail/' + id,
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
      <Spin size="large" spinning={this.state.isLoad}>
        <div className={styles.bg}>
          <div className={styles.description_0} dangerouslySetInnerHTML={{__html: this.state.a}}></div>
          <div className={styles.description_1} dangerouslySetInnerHTML={{__html: this.state.b}}></div>
          <div className={styles.description_2} dangerouslySetInnerHTML={{__html: this.state.c}}></div>
          <div className={styles.description_3} dangerouslySetInnerHTML={{__html: this.state.d}}></div>
          <div className={styles.description_4} dangerouslySetInnerHTML={{__html: this.state.e}}></div>
          <div className={styles.description_5} dangerouslySetInnerHTML={{__html: this.state.f}}></div>
          <div className={styles.menu_0} onClick={this.onClickMenu.bind(this, 'A')}></div>
          <div className={styles.menu_1} onClick={this.onClickMenu.bind(this, 'B')}></div>
          <div className={styles.menu_2} onClick={this.onClickMenu.bind(this, 'C')}></div>
          <div className={styles.menu_3} onClick={this.onClickMenu.bind(this, 'D')}></div>
          <div className={styles.menu_4} onClick={this.onClickMenu.bind(this, 'E')}></div>
          <div className={styles.menu_5} onClick={this.onClickMenu.bind(this, 'F')}></div>
          <div className={styles.back} onClick={this.onClickBack.bind(this)}></div>
        </div>
      </Spin>
    )
  }
}

export default withRouter(Index)