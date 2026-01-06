import React from 'react'

const Copy = () => {
    const handleCopy = () =>{
        console.log("Stop copying my content")
    }
    return (
        <div onCopy={handleCopy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur facere nihil, placeat at quasi totam iste delectus. Vitae maxime soluta libero sint incidunt. Sapiente quia ea enim sunt maiores velit?</div>
    )
}

export default Copy