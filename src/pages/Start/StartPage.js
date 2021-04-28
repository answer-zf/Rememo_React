import React, { Component } from 'react'
import ClassPage from './ClassPage'
import FunctionPage from './FunctionPage'

export default class StartPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <h4>State</h4>
        <ClassPage parent="this is father" />
        <div>--------------------------------------------------------------</div>
        <FunctionPage parent="this is father" />
      </div>
    )
  }
}
