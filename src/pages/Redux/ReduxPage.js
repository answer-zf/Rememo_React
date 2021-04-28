import React, { Component } from 'react'
import ReactReduxPage from './ReactReduxPage'
import ReduxOrigin from './ReduxOrigin'

import { Provider } from 'react-redux'
import store from '../../store'

export default class ReduxPage extends Component {
  render() {
    return (
      <div>
        <h3>Redux</h3>
        {/* origin */}
        <ReduxOrigin />
        <div>--------------</div>
        {/* react redux */}
        <Provider store={store}>
          <ReactReduxPage />
        </Provider>
      </div>
    )
  }
}
