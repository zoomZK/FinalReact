import React from 'react'
import  product  from "../../productlist";
import { useEffect } from 'react';
import { useState } from 'react';

const {productId: idSelected} = route.params
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const productSelected = allProducts.find(
            (product) => product.id === idSelected
            );
        setProduct(productSelected);
    }, [idSelected]);

function Detail() {
    return (
        <div>
          {product && (
            <div>
              <p>{product.productName}</p>
              <h1>{product.price}</h1>
            </div>
          )}
        </div>
      );
    }

export default Detail