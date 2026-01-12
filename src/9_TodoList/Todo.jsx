import React, { useEffect, useState } from 'react'

const Todo = () => {
    const[todo, setTodo] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim() === "") return; // prevent adding empty todos
        setTodo([...todo, inputValue]);
        setInputValue("");
    }

    const deleteSpecificTodo = (indexToDelete) => {
        setTodo(todo.filter((_, idx) => idx !== indexToDelete));
    };

    useEffect(() => {
        console.log("Updated Todo List : ", todo);
    }, [todo]);
    return (
        <div>
            <h3>Todo List</h3>
            <form onSubmit={handleSubmit} >
                <input type = 'text' value = {inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder='Add Todo' ></input>
                <button type='submit'>Add Todo</button>
            </form>
            <ul>
                {
                    todo.map((t,idx)=>(
                        <li key={idx}>
                            {t}
                            {/* <button onClick={deleteSpecificTodo(idx)}>Delete</button>  */}
                            {/* this is the wrong to call a parametrized function becz it is like a function call immediately */}

                            {/* The correct way is  */}
                            <button onClick={() => deleteSpecificTodo(idx)}>Delete</button>
                        </li>                       
                    ))

                }   
            </ul>


            <button onClick={()=>(setTodo([]))}>Clear Todo</button>

        </div>
    )
}

export default Todo