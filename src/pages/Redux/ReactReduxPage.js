import React, { Component } from 'react'

import { connect } from 'react-redux'

export default connect(
  // mapStateToProps 把 state 映射到 props
  state => ({ data: state }),
  // mapDispatchToProps 把 dispatch 映射到 props
  { add: () => ({ type: 'ADD', payload: 90 }) }
)(
  class ReactReduxPage extends Component {
    render() {
      console.log(this.props)
      const { data, add } = this.props
      return (
        <div>
          <h4>ReactReduxPage</h4>
          <p>{data}</p>
          <button onClick={add}>add</button>
        </div>
      )
    }
  }
)
