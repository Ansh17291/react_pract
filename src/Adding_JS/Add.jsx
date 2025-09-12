import React from 'react'

const Add = () => {
    const myName = 'Ansh Mishra';
    const multiply = (a, b) => a * b;
    const class_name = 'my-class';
  return (
    <div>
      <h2>Add Component</h2>
      <p>Name: {myName}</p>
      <p>Multiplication Result: {multiply(2, 3)}</p>
      <p className={class_name}>This is a special dynamic class Name</p>
    </div>
  )
}

export default Add