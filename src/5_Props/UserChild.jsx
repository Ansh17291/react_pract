import React from 'react'

const UserChild = ({name, place, hobbies}) => { // here we have used destructuring to get the props directly
    console.log({name, place, hobbies});
  return (
    <>
      <h4> This is a child component of App.jsx</h4>
      <h3> Name: {name}, Place: {place}, hobbies : {hobbies}</h3>
    </>
  )
}

export default UserChild  