import React, { useState, memo, useMemo, useCallback } from 'react'

const UseMemoPage = () => {
  const [num1, setNum1] = useState(1)
  const [num2, setNum2] = useState(2)

  const handleClick1 = () => {
    setNum1(num1 + 1)
  }

  const handleClick2 = () => {
    setNum2(num2 + 2)
  }

  // const childHandle = () => {
  //   // 这种写法，子组件依据渲染
  //   console.log('子组件点击事件', num1)
  // }

  // const childHandle = useMemo(
  //   // 写法1
  //   // () => {
  //   //   const fn = e => {
  //   //     console.log('子组件点击事件', num1)
  //   //     console.log(e)
  //   //   }
  //   //   return fn
  //   // },
  //   // [num1]
  //   // 写法2
  //   () => div => {
  //     console.log('子组件点击事件', num1)
  //     console.log(div)
  //   },
  //   [num1]
  // )

  // 写法3
  const childHandle = useCallback(
    div => {
      console.log('子组件点击事件', num1)
      console.log(div)
    },
    [num1]
  )

  return (
    <div>
      <h5>useMemoPage</h5>
      <p>num1:{num1}</p>
      <p>num2:{num2}</p>
      <button onClick={handleClick1}>change1</button>
      <button onClick={handleClick2}>change2</button>

      <div>-----</div>

      <Child1 data={num1} onClick={childHandle} />
    </div>
  )
}

const Child = props => {
  console.log('子组件渲染')
  return (
    <div>
      this.is child
      <button
        onClick={e => {
          props.onClick(e.target)
        }}
      >
        {props.data}
      </button>
    </div>
  )
}
const Child1 = memo(Child)

export default UseMemoPage
