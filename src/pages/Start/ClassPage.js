import { Component } from 'react'

export default class ClassPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'this is msg',
      count: 1,
    }
  }

  // 组件挂载完成后
  componentDidMount() {
    setInterval(() => {
      this.timer = this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  // 组件卸载前
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  handleChange = () => {
    this.setState({ msg: 'this.is changemsg' })
  }

  render() {
    const { parent } = this.props
    const { msg, count } = this.state
    return (
      <div>
        <h5>this is Class Page</h5>
        <p>{msg}</p>
        <p>{count}</p>
        <p>{parent}</p>
        <button onClick={this.handleChange}>change</button>
      </div>
    )
  }
}
