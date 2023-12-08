import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const CartItem = ({ item }) => {
  const { removeItem, handleIncrease, handleDecrease } =
    useContext(CartContext);

  const handleRemove = () => {
    removeItem(item.id);
  };

  return (
    <Card className="card card-animation" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.pictureUrl} alt={item.title} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <div className="aumentar-reducir-2">
          <button
            onClick={() => handleDecrease(item.id)}
            className="btn btn-primary bg-black"
          >
            -
          </button>
          <h6> Cantidad: {item.quantity}</h6>
          <button
            onClick={() => handleIncrease(item.id)}
            className="btn btn-primary bg-black"
          >
            +
          </button>
        </div>

        <p>Valor unitario: $ {item.price}</p>
        <h4>Precio: $ {item.quantity * item.price}</h4>
        <Button onClick={handleRemove} className="bg-black" variant="primary">
          Quitar
        </Button>
      </Card.Body>
    </Card>
  );
};
