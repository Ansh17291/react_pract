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

  return (
    <div>
      <h2>More Fun Component</h2>
      <p>{greet}, today's date is {date} and the current time is {time}.</p>
      <br></br>
      <br></br>
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