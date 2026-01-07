import React, { useState } from 'react'
import ChildComponent from './ChildComponent';
import ChildComponent2 from './ChildComponent2';
import Example from './Example';

const Hook_useState = () => {
    const [count , setCount] = useState(0);


    const [subjects, setSubjects] = useState(['Math', 'Science']);

    const addSub = ()=>{
        setSubjects([...subjects, 'Quant']);
    }

    const removeQuant = () =>{
        setSubjects(subjects.filter(f => f != 'Quant'));
    }

    const updateQuant = () =>{
        setSubjects(subjects.map(f => f === 'Quant' ? 'Q.A.' : f));
    }

    const [movie , setMovie] = useState({
        title : 'InterStellar',
        rating : 8
    })

    const changeMovieRating = () =>{

        // the below is a long way !!!!

        // const copyMovie = {
        //     ...movie,
        //     rating: 10
        // }

        // setMovie(copyMovie)

        // Shorter way lol !!!!

        setMovie({...movie, rating: 10});
    }

    const [movieList , setMovieList] = useState([
        {
            id :1 , 
            title: 'InterStellar', 
            rating: 10
        },
        {
            id : 2,
            title: 'John Wick',
            rating : 9
        },
        {
            id : 3,
            title : 'SpiderMan',
            rating : 8
        }
    ])

    const changeMovie = ()=>{
        setMovieList(
            movieList.map((m) => (m.id === 3 ? {...movie, title: 'Ratsasan'} : m))
        )
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            {/* every time we use the setCount function, it creates a new state or re-renders the dom with the new state */}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement </button>

            <ul>
                {
                    subjects.map((sub, idx) => (
                        <li key={idx}> {sub} </li>
                    ))
                }
            </ul>

            <button onClick={addSub}>Add subject</button>
            <button onClick={removeQuant}>Remove Quant</button>
            <button onClick={updateQuant}>Update Quant</button>

            <h4>Updating Objects</h4>

            <h2>Movie</h2>

            <h4>Title : {movie.title}</h4>
            <p>Rating : {movie.rating}</p>
            <button onClick={changeMovieRating}>Change rating</button>

            <h4>Array Of Movies</h4>

            <ul>
                {
                    movieList.map(m => (
                        <li key={m.id}>
                            {m.title}
                            <p>{m.rating}</p>
                        </li>
                    ))
                }
            </ul>

            <button onClick={changeMovie}>Change Movie</button> 


            <h2> Passing Count to Child Component</h2>

            {/* the 2 components below share the same variable from the parent therefore any change in the variable would result in the change in boht of the component and in 2 places in the DOM */}

            <ChildComponent count = {count} handleClick= {() => setCount(count + 1)}/>
            <ChildComponent2 count = {count} handleClick={() => setCount(count + 1)}/>
            
            <Example />




        </div>
    )
}

export default Hook_useState