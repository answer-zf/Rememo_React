import React, { Component } from 'react'
import { OrderConsumer } from './orderContext'
import { UserConsumer } from './userContext'

class UserPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <OrderConsumer>
          {({ orderNum }) => (
            <UserConsumer>
              {({ userNum }) => (
                <div>
                  userpage
                  <p>orderNum:{orderNum}</p>
                  <p>userNum:{userNum}</p>
                </div>
              )}
            </UserConsumer>
          )}
        </OrderConsumer>
      </div>
    )
  }
}

export default UserPage
