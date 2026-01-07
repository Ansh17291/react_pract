import React from 'react'

const ChildComponent2 = ({count, handleClick}) => {
    return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default ChildComponent2