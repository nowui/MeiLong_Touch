import React, { Component } from 'react'
import { withRouter, Link } from 'react-router'

let self
let socket

class Main extends Component {

  constructor(props) {
    super(props)

    self = this
  }

  componentDidMount() {
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {

     })
    )
    return (
      <div>{childrenWithProps}</div>
    )
  }
}

export default withRouter(Main)