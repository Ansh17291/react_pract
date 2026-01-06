import React from 'react'

const Button_click = () => {
  return (
    <div>
        <button onClick={()=> console.log(Math.round(Math.random() * 10))}>Click Me </button>
    </div>
  )
}

export default Button_click