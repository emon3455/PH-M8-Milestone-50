import React from 'react';
import "./Cart.css"

const Cart = (props) => {

    const {cart} = props
    console.log(cart);

    let total =0;
    let shiping = 0;
    cart.map(product=> {
        total = total + product.price
        shiping = shiping + product.shipping
    });

    const tax = total * 0.07;
    const grandTotal = total + tax;

    return (
        <div className='cart'>
            
            <h2>Order Details</h2>
            <h4>Item Selected: {cart.length}</h4>
            <h4>Total Price: ${total}</h4>
            <h4>Total Shipping: {shiping}</h4>
            <h4>Tax: ${tax.toFixed(2)}</h4>
            <h3>Grrand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;