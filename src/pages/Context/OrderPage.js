import React, { Component } from 'react'
import { OrderConsumer } from './orderContext'
import { UserProvider } from './userContext'
import UserPage from './UserPage'

class OrderPage extends Component {
  render() {
    return (
      <div>
        <OrderConsumer>
          {value => (
            <div>
              <p>{value.orderNum}</p>
            </div>
          )}
        </OrderConsumer>
        <UserProvider value={{ userNum: 567 }}>
          <UserPage />
        </UserProvider>
      </div>
    )
  }
}

export default OrderPage
