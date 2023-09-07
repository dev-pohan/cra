import React from 'react'
import style from './Counter.module.css' // CSS Module

function Counter() {
  const [count, setCount] = React.useState(0) // React Hook

  // Arrow Function
  const increment = () => {
     // setCount(count + 1) <= don't use this
    setCount(currentCount => currentCount + 1)
  }

  const decrement = () => {
    setCount(currentCount => currentCount - 1)
  }

  const incrementBtnStyle = {
    visibility: count < 9 ? 'visible' : 'hidden'
  }

  const decrementBtnStyle = {
    visibility: count > 0 ? 'visible' : 'hidden'
  }

  return (
    <div className={style.counter}>
      <button style={incrementBtnStyle} onClick={increment}>
        +
      </button>
      <h1>{ count }</h1>
      <button style={decrementBtnStyle} onClick={decrement}>
        -
      </button>
    </div>
  )
}

export default Counter
