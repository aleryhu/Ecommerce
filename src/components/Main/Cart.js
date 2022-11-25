import React from "react";
import productThumb2 from "../../images/image-product-2-thumbnail.jpg";

const Cart = ({ cart, setCart }) => {
  const handleDelete = (id) => {
    setCart(cart.filter((items) => items.id !== id));
  };

  return (
    <div className='cart'>
      <h1>Carts</h1>
       {cart.map((item) => {
        const { id, count, price } = item;
        return (
          <div
            className='items'
            key={id}>

        <img
              className='item-img'
              src={productThumb2}
              alt='#'
            />
            <p className='description'>
              Autumn Limited Edition <br /> Sneakers {count} {`$${price}`}
            </p>
            <i
              onClick={() => handleDelete(id)}
              className='fas fa-trash-can'></i> 
          </div>
        );
      })}
      <button className='checkout'>Checkout</button>
    </div>
  );
};

export default Cart;
