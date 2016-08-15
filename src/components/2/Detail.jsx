import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Spin } from 'antd'
import Helper from '../../common/Helper'
import styles from './detail.less'

let self

class Index extends Component {

  constructor(props) {
    super(props)

    self = this

    this.state = {
      isLoad: false,
      object: {
        districtType: {
          description: ''
        },
        frontDisplayList: [],
        allUnitList: []
      }
    }
  }

  componentDidMount() {
    self.load()
  }

  onClickMenu(item) {
    event.preventDefault()

    self.props.router.push({
      pathname: '/2/content/' + item.id + '/' + item.unittype,
      query: {

      }
    })
  }

  load = function() {
    self.setState({
      isLoad: true
    })

    Helper.ajax({
      url: '/services/djDistrictList/' + self.props.params.id,
      data: {

      },
      success: function(data) {
        self.setState({
          object: data
        })
      },
      complete: function() {
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
        <img src={require('../../assets/image/detail_' + self.props.params.id + '_bg.png')} />
        <div className={styles.menu}>
          {
            this.state.object.frontDisplayList.map(function (item, index) {
              return (
                <div key={index} className={styles.menuItem} onClick={this.onClickMenu.bind(this, item)}>
                  {item.name}
                </div>
              )
            }.bind(this))
          }
        </div>
        <div className={styles.description} dangerouslySetInnerHTML={{__html: this.state.object.districtType.description}}></div>
        {
          this.state.object.allUnitList.map(function (item, index) {
            let mapItemLeft = {
              backgroundImage: "url(" + require('../../assets/image/button_map_menu_' + item.unittype + '_left.png') + ")"
            }

            let mapItemCenter = {
              backgroundImage: "url(" + require('../../assets/image/button_map_menu_' + item.unittype + '_center.png') + ")"
            }

            let mapItemRight = {
              backgroundImage: "url(" + require('../../assets/image/button_map_menu_' + item.unittype + '_right.png') + ")"
            }

            return (
              <div key={index} className={styles.mapItem} style={{top: item.coordinationy, left: item.coordinationx}} onClick={this.onClickMenu.bind(this, item)}>
                <li className={styles.mapItemLeft} style={mapItemLeft}>&nbsp;</li>
                <li className={styles.mapItemCenter} style={mapItemCenter}>{item.name}</li>
                <li className={styles.mapItemRight} style={mapItemRight}>&nbsp;</li>
              </div>
            )
          }.bind(this))
        }
        <div className={styles.back} onClick={this.onClickBack.bind(this)}></div>
      </Spin>
    )
  }
}

export default withRouter(Index)