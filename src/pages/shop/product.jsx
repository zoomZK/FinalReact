import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props, navigation) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const onSelect = (id) => {
    navigation.navigate('Detail',{product: Product.id})
  }
  const cartItemCount = cartItems[id];

  return (
    <div onPress={() => onSelect(Product.id)} className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
