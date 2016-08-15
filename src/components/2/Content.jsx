import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Spin } from 'antd'
import Swiper from 'swiper'
import Helper from '../../common/Helper'
import 'swiper/dist/css/swiper.min.css'
import './Content.css'
import styles from './Content.less'

let self
let swiper

class Content extends Component {

  constructor(props) {
    super(props)

    self = this

    this.state = {
      isLoad: false,
      object: {
        isleader: 0,
        addresspicture: '',
        pictures: []
      }
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
      url: '/services/djUnitDetail/' + self.props.params.unittype + '-' + self.props.params.id,
      data: {

      },
      success: function(data) {
        if(data != '') {
          self.setState({
            object: data
          })
        }
      },
      complete: function() {
        swiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          direction: 'vertical',
          slidesPerView: 3,
          loop: true
        })

        self.setState({
          isLoad: false
        })
      }
    })
  }

  onClickGo(url) {
    event.preventDefault()

    self.props.router.push({
      pathname: '/2/map/' + encodeURIComponent(url),
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
        <img src={require('../../assets/image/content_2_' + self.props.params.unittype + '_bg.png')} />
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              this.state.object.pictures.map(function (item, index) {
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
        <div className={styles.name}>
          {this.state.object.name}
          {
            this.state.object.addresspicture == '' ?
            ''
            :
            <div className={styles.go} onClick={this.onClickGo.bind(this, this.state.object.addresspicture)}></div>
          }
          {
            this.state.object.isleader == 1 ?
            <div className={styles.leader}>（牵头单位）</div>
            :
            ''
          }
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{__html: this.state.object.content}}></div>
        <div className={styles.back} onClick={this.onClickBack.bind(this)}></div>
      </Spin>
    )
  }
}

export default withRouter(Content)