import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {

    const [products ,setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{

        try{
            fetch("../../../public/./fakeData/products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
        }
        catch(ex){
            console.log(ex);
        }
   
    },[])

    const handleAddToCart = (product)=>{
        const newCart = [...cart , product];
        setCart(newCart);
    }


    return (
        <div className='shoping-container'>

            <div className="product-container">

            {
               
               products.map(product => <Product
                    product={product}
                    key={product.id}
                    handleAddToCart={handleAddToCart}
                   >

                </Product>)
               
            }    

            </div>
            <div className="details-container">

                <h2>Order Details</h2>
                <h4>Item Selected: {cart.length}</h4>

            </div>
            
        </div>
    );
};

export default Shop;