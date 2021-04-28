import React, { Component } from 'react'
import store from '../../store'

export default class ReduxOrigin extends Component {
  // componentDidMount() {
  //   store.subscribe(() => {
  //     console.log('this.change')
  //     this.forceUpdate()
  //   })
  // }

  addHandle = () => {
    const actionCreator = (type, payload) => {
      return {
        type,
        payload,
      }
    }
    store.dispatch(actionCreator('ADD', 3))
  }

  render() {
    console.log(store.getState())
    return (
      <div>
        <h5>ReduxOrigin</h5>
        <p>{store.getState()}</p>
        <button onClick={this.addHandle}>add</button>
      </div>
    )
  }
}
