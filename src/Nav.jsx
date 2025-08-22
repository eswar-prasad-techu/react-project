import React from "react";
import { useSelector } from "react-redux";

const Nav = () => {
  const {cart,totalPrice} = useSelector(state => state.cart)

  return (
    <div
      style={{
        background: "black",
        display: "flex",
        justifyContent: "space-evenly",
        padding: "15px 0px",
      }}
    >
      <div style={{ background: "#ffffff" }}>Items: {cart.length}</div>
      <div style={{ background: "#ffffff" }}>Total Price : {totalPrice}</div>
      hello
    </div>
  );
};

export default Nav;
