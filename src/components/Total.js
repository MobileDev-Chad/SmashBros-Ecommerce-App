import React from "react";
import { useSelector } from "react-redux";

const cart = useSelector((state) => state.cart);

function Total() {
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <>
      Total ({getTotal().totalQuantity} items) :{" "}
      <>${getTotal().totalPrice.toFixed(2)}</>
    </>
  );
};

export default Total;
