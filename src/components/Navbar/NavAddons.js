import React from "react";
import avatar from "../../images/image-avatar.png";
const NavAddons = ({ showCart, setShowCart, cart }) => {
  const handleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className='nav_addon'>
      <i
        onClick={handleCart}
        className='fas fa-cart-shopping'></i>
      {cart.length > 0 && <span className='badge'><code>{cart.length}</code></span>}

      <img
        src={avatar}
        alt='#'
      />
    </div>
  );
};

export default NavAddons;
