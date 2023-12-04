import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ItemCounter } from "./ItemCounter";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ item }) => {

  const { onAdd } = useContext(CartContext);
  const add = () => {
    onAdd(item);
  }

  return (
    <Container className="padding-superior fluid-md">
      <div className="product-detail">
        <img src={item.pictureUrl} alt={item.title} />
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <ItemCounter onAdd={add}/>
        <h4>$ {item.price}</h4>
        <button className="btn-agregar-carrito btn btn-primary bg-black">
          {" "}
          Agregar al carrito{" "}
        </button>
      </div>
    </Container>
  );
};

{
  /* <Form className="aumentar-reducir d-flex">
        <Button className="bg-black" variant="primary">-</Button>
          <Form.Control
            placeholder="1"
          />
          <Button className="bg-black" variant="primary">+</Button>
        </Form> */
}
