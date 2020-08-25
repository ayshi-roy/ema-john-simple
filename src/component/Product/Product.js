import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    console.log(props)
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className='single-product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h3 className='product-name'>Name:{name}</h3>
                <br/>
                <p><small>by: {seller}</small></p>
                <br/>
                <p>${price}</p>
                <br/>
                <p>only {stock} left in stock - order soon</p>
                <br/>
                <button onClick={() => props.handleButton(props.product)}>
                    <span><FontAwesomeIcon icon={ faShoppingCart } />add to cart</span>
                </button>
            </div>            
        </div>
    );
};

export default Product;