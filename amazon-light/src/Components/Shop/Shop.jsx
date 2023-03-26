import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {

    const [products ,setProducts] = useState([])

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

    return (
        <div className='shoping-container'>

            <div className="product-container">

            {
               
               products.map(product => <Product product={product} key={product.id}></Product>)
               
            }    

            </div>
            <div className="details-container">

                <h2>Emon</h2>

            </div>
            
        </div>
    );
};

export default Shop;