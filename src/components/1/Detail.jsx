import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Spin } from 'antd'
import Swiper from 'swiper'
import Helper from '../../common/Helper'
import 'swiper/dist/css/swiper.min.css'
import './Detail.css'
import styles from './Detail.less'

let self
let swiper


class Index extends Component {

  constructor(props) {
    super(props)

    self = this

    this.state = {
      isLoad: false,
      list: []
    }
  }

  componentDidMount() {
    self.load()
  }

  componentWillUnmount() {
    swiper.destroy()
  }

  load = function() {
    self.setState({
      isLoad: true
    })

    Helper.ajax({
      url: '/services/djHuoDongFengCai/' + self.props.params.id,
      data: {

      },
      success: function(data) {
        self.setState({
          list: data
        })
      },
      complete: function() {
      	swiper = new Swiper('.swiper-container-2', {
          pagination: '.swiper-pagination',
		      loop: true
		    })

        self.setState({
          isLoad: false
        })
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
	        <div className="swiper-container-2">
	          <div className="swiper-wrapper">
	            {
	              this.state.list.map(function (item, index) {
	                return (
	                <div key={index} className="swiper-slide">
                		<img src={Helper.host + item.picture} style={{width: '100%'}} />
	                </div>
	                )
	              }.bind(this))
	            }
	          </div>
          <div className="swiper-pagination"></div>
	        </div>
	        <div className={styles.back} onClick={this.onClickBack.bind(this)}></div>
	      </div>
      </Spin>
    )
  }
}

export default withRouter(Index)