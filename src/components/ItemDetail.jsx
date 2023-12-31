import Container from "react-bootstrap/Container";

import { ItemCounter } from "./ItemCounter";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ item }) => {
  const { onAdd } = useContext(CartContext);

  const add = (quantity) => {
    onAdd(item, quantity);
    
  };

  return (
    <Container className="padding-superior fluid-md">
      <div className="product-detail">
        <h1>{item.title}</h1>
        <img src={item.pictureUrl} alt={item.title} />
        <p>{item.description}</p>
        <div>
          <h4>$ {item.price} </h4>
          <h6> Stock: {item.stock}</h6>
          <ItemCounter onAdd={add} stock={item.stock} initial={1} />
        </div>
        
      </div>
    </Container>
  );
};

