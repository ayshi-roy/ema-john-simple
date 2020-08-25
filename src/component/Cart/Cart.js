import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price; 
        
    }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99
    }
    else if(total > 0){
        shipping = 12.99
    }

    const tax = Math.round(total/10);

    return (
        <div>
            <h3>Order Now</h3>
            <h4>Items Ordered {cart.length}</h4>
            <h4>Product Price: {total}</h4>
            <h4>shipping Cost: {shipping}</h4>
            <h4>Tax + Vat: {tax}</h4>
            <h4>Total Price: {total + shipping + tax}$</h4>
        </div>
    );
};

export default Cart;