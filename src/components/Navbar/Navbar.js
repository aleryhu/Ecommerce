import React from "react";
import NavAddons from "./NavAddons";
import NavLinks from "./NavLinks";

const Navbar = ({ handleSidebar, showCart, setShowCart, cart }) => {
  return (
    <nav className='nav'>
      <span>
        <i
          onClick={handleSidebar}
          className='fas fa-bars'></i>
        <a
          href='/'
          className='navbar-brand'>
          sneakers
        </a>
      </span>
      <NavLinks />
      <NavAddons
        cart={cart}
        showCart={showCart}
        setShowCart={setShowCart}
      />
    </nav>
  );
};

export default Navbar;
