import { PureComponent } from 'react'

export default class PurePage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
      obj: {
        num: 0,
      },
    }
  }
  // shouldComponentUpdate(nextProp, nextState) {
  //   return nextState.count !== this.state.count
  // }
  addHandle = () => {
    // this.setState({
    //   // count: 100,
    //   obj: {
    //     num: 100,
    //   },
    // })
    this.setState(state => {
      state.count = 100
      console.log(state)
      return state
    })
  }
  render() {
    console.log('this. render')
    const { count } = this.state
    return (
      <div>
        <p>{count}</p>
        {/* <p>{this.state.obj.num}</p> */}
        <button onClick={this.addHandle}>add</button>
      </div>
    )
  }
}
