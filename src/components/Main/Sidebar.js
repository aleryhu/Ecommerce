import React from "react";

const SideBar = ({ setSidebar }) => {
  const links = ["Collection", "Men", "Women", "About", "Contact"];
  return (
        <div className='sidebar'>
          <i
            id='closeBtn'
            onClick={() => setSidebar(false)}
            className='fas fa-xmark'
          ></i>

          <ul className='sidebar-nav'>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <a
                    href='/'
                    className='sidebaratag'
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
  );
};

export default SideBar;
