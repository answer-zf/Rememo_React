import React, { Component } from 'react'
import { OrderProvider } from './orderContext'
import OrderPage from './OrderPage'

class ContextPage extends Component {
  render() {
    return (
      <div>
        <h3>ContextPage</h3>
        <OrderProvider value={{ orderNum: 222 }}>
          <OrderPage />
        </OrderProvider>
      </div>
    )
  }
}

export default ContextPage
