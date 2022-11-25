import React from "react";
import ContentContainer from "./ContentContainer";
import ShowCaseContainer from "./ShowCaseContainer";

const Layout = ({ showCart, cart, setCart }) => {
  return (
    <div className='layout'>
      <ShowCaseContainer />
      <ContentContainer cart={cart} setCart={setCart} showCart={showCart} />
    </div>
  );
};

export default Layout;
