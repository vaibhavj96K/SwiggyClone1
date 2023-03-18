import React from "react";

const Title = () => {
  return (
    <div className="logo">
      <a href="/">
        <img
          className="img-logo"
          alt="logo"
          src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Emblem.png"
        />
      </a>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Login</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
