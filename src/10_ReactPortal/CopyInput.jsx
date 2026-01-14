import React, { useState } from 'react'
import PopUpContent from './PopUpContent'

const CopyInput = () => {
    const [inputValue , setInputValue] = useState("");
    const [copied , setCopied] = useState(false);

    const handleCopy = () =>{
        navigator.clipboard.writeText(inputValue).then(() =>{
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        })
    }

  return (
    <div style={{position: 'relative', marginTop: '6rem'}}>
        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='border-2'/>
        <button onClick={handleCopy}>Copy</button>
        {/* this will be rendered every time state changes of copied variable */}
        <PopUpContent copied={copied}/> 
    </div>
  )
}

export default CopyInput