import React from 'react'

const NewChild = (props) => {
  return (
    <>
        {/* / this is to access the content the information between the component. */}
        <div>{props.children}</div> 
        <h1> NewChild Component</h1>
    </>
  )
}

export default NewChild