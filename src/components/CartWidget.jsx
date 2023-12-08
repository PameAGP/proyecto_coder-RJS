import { Link } from "react-router-dom";
import Carrito from "../assets/carrito.png";

import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const CartWidget = () => {
  const { items } = useContext(CartContext);

  const cantItems = items.reduce(
    (accumulator, actualValue) => accumulator + actualValue.quantity,
    0
  );

  if (!items.length) {
    return (
      <>
        <img src={Carrito} alt="carrito" className="carrito" />
      </>
    );
  }

  return (
    <Link to="/cart">
      <img src={Carrito} alt="carrito" className="carrito" />
      <span>{cantItems}</span>
    </Link>
  );
};
