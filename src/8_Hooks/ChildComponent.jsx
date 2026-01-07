import React from 'react'

const ChildComponent = ({count, handleClick}) => {
  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default ChildComponent