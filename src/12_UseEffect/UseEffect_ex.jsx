import React, { useEffect, useState } from 'react'

const UseEffect_ex = () => {
    const [value, setValue] = useState(0);
    const [tp, setTp] = useState(0);

    // case 1 : No dependancy array
    // console.log() will be called for every render for every state change , in this case for value and tp both
    useEffect(()=>{
        console.log("UseEffect called");
        document.title = `You clicked ${value} times`;
    })

    // case 2 : with empty dependancy array
    // console.log() will be called only once when component is mounted
    useEffect(()=>{
        console.log("UseEffect called");
        document.title = `You clicked ${value} times`;
    }, [])

    // case 3 : with specific dependancy
    // console.log() will be called only when value state is changed
    useEffect(()=>{
        console.log("UseEffect called");
        document.title = `You clicked ${value} times`;
    }, [value])
  return (
    <div>
        <h2>{value}</h2>
        <button onClick={() => setValue(value + 1)}>Increment Value</button>
        <button onClick={() => setTp(tp + 1)}>Increment tp</button>
    </div>
  )
}

export default UseEffect_ex