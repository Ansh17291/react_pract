import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [data , setData] = useState([]);

    useEffect(() =>{
        async function fetchData() {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const jsonData = await res.json();
            if (jsonData && jsonData.length > 0) {
                setData(jsonData);
            }
        }
        fetchData();
    }, [])

  return (
    <div>
        {data.map((item) => (
            <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </div>
        ))}
    </div>
  )
}

export default FetchData