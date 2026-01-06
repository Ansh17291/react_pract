import React from 'react'

const Cart = () => {
    const items = ['Mouse', 'Monitor', 'keyboard']
    return (
        <div>
            {items.length > 0 && <h2>You have {items.length} items in your cart </h2>}


            <ul>
                {items.map((item) =>{
                    return (
                        <li key={Math.random}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Cart