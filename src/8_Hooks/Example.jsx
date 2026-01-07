import React, { useEffect, useState } from 'react'

const Example = () => {

    const [name , setName] = useState(() =>{
        const savedName = localStorage.getItem('name');
        return savedName ? JSON.parse(savedName) :  ''
    });

    useEffect(()=>{
        localStorage.setItem('name', JSON.stringify(name)); // called everytime the state is changed !!
    },[]);

    const handleClear = () =>{
        setName("");
    }


    return (
        <div>
            <h1> Your Name : {name}</h1>

            <input type='text' value={name} onChange={(event) => setName(event.target.value)} placeholder='Enter your name'/>

            <button onClick={handleClear}>Clear Name</button>
        </div>
    )
}

export default Example