import React from "react";

const NavLinks = () => {
  const links = ["Collection", "Men", "Women", "About", "Contact"];
  return (
    <ul className="nav_links">
      {links.map((link, index) => {
        return <li key={index}><a href="#">{link}</a></li>;
      })}
    </ul>
    
  );
};

export default NavLinks;
