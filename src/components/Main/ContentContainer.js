import React from "react";
import { useState } from "react";
import Cart from "./Cart";

const ContentContainer = ({ showCart, cart, setCart }) => {
  const [count, setCount] = useState(0);
  const handleCart = () => {
    const newCart = {
      id: new Date().getTime().toString(),
      count,
      price: count * 125.0,
    };
    if(count>0){
      setCart([...cart, newCart]);
    }else{
      alert("Please include valid item ")
    }
    setCount(0);
  };

  return (
    <div className='ContentContainer'>
      {showCart ? <Cart cart={cart} setCart={setCart} /> : ""}
      <h2>sneakers company</h2>
      <h1>
        Fall Limited edition <br />
        sneakers
      </h1>
      <p>
        These low profile sneakers are your perfect causal wear {}
        companion. Futuring a durable rubber outter sole, {} they'll withstand
        everything the weather can offer.
      </p>
      <div className='away'>
        <div className='pricing'>
          <h3>$125.00</h3>
          <span className='discount'>
            <code>50%</code>
          </span>
        </div>
        <h3 className='slash'>$250.00</h3>
      </div>
      <div className='Buttons'>
        <div className='calc'>
          <button onClick={() => setCount((prev) => prev - 1)}>
            <i className='fas fa-minus'></i>
          </button>
          <span className='count'>{count}</span>
          <button onClick={() => setCount((prev) => prev + 1)}>
            <i className='fas fa-plus'></i>
          </button>
        </div>
        <button
          className='AddCart'
          onClick={handleCart}
        >
          <i className='fas fa-cart-shopping'></i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ContentContainer;
