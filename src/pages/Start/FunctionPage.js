import React, { useEffect, useState } from 'react'

const FunctionPage = ({ parent }) => {
  let [count, setCount] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    console.log('object')
    return () => {
      clearInterval(timer)
    }
  }, [])

  // 第二个参数数字包含的时依赖项,
  // [parent]由于parent是定值, useEffect 不会重复执行
  // 当为[parent, count],useEffect 1s执行一次
  // []即不绑定依赖 useEffect 就执行一次

  return (
    <div>
      <h5>this is function page</h5>
      <p>{count}</p>
      <p>{parent}</p>
    </div>
  )
}

export default FunctionPage
