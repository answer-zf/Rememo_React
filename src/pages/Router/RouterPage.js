import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
// import Home from './Home'
import Order from './Order'
import User from './User'

export default class RouterPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  toOrderHandle = () => {
    console.log(this.props)
    // this.props.history.push('/order')
  }

  render() {
    console.log(this.props)

    return (
      <Router>
        <h4>router page</h4>
        <Link to="/">home</Link>
        <Link to="/user">user</Link>
        {/* <Link to="/order">order</Link> */}
        <button onClick={this.toOrderHandle}> to order</button>
        <Switch>
          {/* switch 做唯一匹配（只显示匹配到的第一个路由） */}
          {/* Route 中 exact 做精确匹配 */}
          <Route
            exact
            path="/" // 优先级最高
            // children={() => <div>children</div>}
            // 优先级其次
            // component={HomePage}
            render={() => <div>Render</div>}
          />
          <Route path="/user" component={User} />
          <Route path="/order" children={Order} />
        </Switch>
      </Router>
    )
  }
}
// export default withRouter(RouterPage)
