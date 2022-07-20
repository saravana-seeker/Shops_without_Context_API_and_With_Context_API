import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, current) => acc + Number(current.price), 0));
  }, [cart]);
  return (
    <div className="container">
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total ${total}</span>
      <br />
      {<SingleProduct data={cart} cart={cart} setCart={setCart} />}
    </div>
  );
};

export default Cart;
