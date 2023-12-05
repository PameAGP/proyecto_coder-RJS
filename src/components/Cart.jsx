import { CartItem } from "./CartItem";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";

export const Cart = () => {
  const { clear, items } = useContext(CartContext);

  const total = items.reduce(
    (accumulator, actualValue) => accumulator + (actualValue.price * actualValue.quantity), 0
  );


  if (!items.length) {
    return <>
    <h3>Sin elementos 😓</h3>
    <Link to={`/`}>
     <button className="btn btn-primary bg-black">Volver para comprar</button>
    </Link>
   
    </>
  }

  return (
    <Container className="backgrownd-color">
      <h1>Carrito:</h1>
      <Row className="justify-content-center">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <h5>Total : $ {total}</h5>
        <button className="btn btn-primary bg-black" onClick={clear}>Eliminar Carrito</button>
      </Row>
    </Container>
  );
};
