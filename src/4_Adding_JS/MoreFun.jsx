import React from 'react'

const MoreFun = () => {
  const greet = "Hello";
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  const Product = {
    name : 'Laptop',
    price : 50000,
    brand : 'Dell',
    color : 'Silver'
  }
  const peopleInfo = [
    {
      name : "Ansh",
      email: "ansh@gmail.com",
      place : "India",
    },
    {
      name : "Yash",
      email: "yash@gmail.com",
      place : "USA",
    },{
      name : "Daksh",
      email: "daksh@gmail.com",
      place : "Europe",
    },{
      name : "Ram",
      email: "ram@gmail.com",
      place : "Universe",
    },
  ]

  const numbers = [1,2,3,4,5,6,7,8,9];

  return (
    <div>
      <h2>More Fun Component</h2>
      <p>{greet}, today's date is {date} and the current time is {time}.</p>
      <h3>Number List:</h3>
      <ul>
        { // here we use '{}' becz we are using js in the return component 
          numbers.map((number) =>(          // if we were to use curly brackets i.e. '{}' in that case we need to specify return thing 
           <li key={number}>{number}</li>
          ))
        }
      </ul>
      <p> Displaying User info using Map method</p>

      
      
      {/* // Displaying by taking the object from the array one by one and then using person.name , person.place, to render it on the DOM */}

      {/* {
        peopleInfo.map((person) =>(
          <ul key ={Math.random()} >
            <li>Name :{person.name}</li>
            <li>Email : {person.email}</li>
            <li>Place : {person.place}</li>
          </ul>
        ))
      } */}


      {/* // Better way , destructure the object while taking it as a callback  */}

      {
        peopleInfo.map(({name, email, place}) =>(
          <ul key={Math.random()}>
            <li>Name : {name}</li>
            <li>Email : {email}</li>
            <li>Place : {place}</li>

          </ul>
        ))
      }
      <h3>Product Details:</h3>
      <ul>
        <li>Name: {Product.name}</li>
        <li>Price: ₹{Product.price}</li>
        <li>Brand: {Product.brand}</li>
        <li>Color: {Product.color}</li>
      </ul>
    </div>
  )
}

export default MoreFun