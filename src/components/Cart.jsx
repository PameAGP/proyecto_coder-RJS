import { CartItem } from "./CartItem";
import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import {
  getFirestore,
  addDoc,
  collection,
} from "firebase/firestore";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Swal from 'sweetalert2'

const initialValues = {
  name: "",
  email: "",
  phone: "",
}

export const Cart = () => {
  const { clear, items } = useContext(CartContext);

  const total = items.reduce(
    (accumulator, actualValue) =>
      accumulator + actualValue.price * actualValue.quantity,
    0
  );

  if (!items.length) {
    return (
      <>
        <h3 className="sin-elementos">Sin elementos 😓</h3>
        <Link to={`/`}>
          <button className="btn btn-primary bg-black">
            Volver para comprar
          </button>
        </Link>
      </>
    );
  }

  

  const [buyer, setBuyer] = useState(initialValues);

  const handleInputChange = (event) => {
    setBuyer((buyer) => {
      return {
        ...buyer,
        [event.target.name]: event.target.value,
      };
    });
  };

  const sendOrder = () => {
    
    const repeatEmail = document.getElementById("repeatEmail").value;
    const emailComprobar = buyer.email;
    
    if (emailComprobar !=repeatEmail) {
      SweetAlert ("error", "Error en email", "Los campos no coinciden")
      
      return;
    } else if (!buyer.email || !repeatEmail || !buyer.phone || !buyer.name){
      
      SweetAlert ("error", "Campos vacíos", "Imposible finalizar compra")

      return;
    }
    const order = {
      buyer: buyer,
      items: items,
      total: total,
    };

    const dataBase = getFirestore();
    const orderCollection = collection(dataBase, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        SweetAlert("Success", "Su orden: " +id+ " ha sido enviada con éxito")
        setBuyer(initialValues);
        document.getElementById("repeatEmail").value = "";
        clear();
      }
    });
  };

  return (
    <Container className="backgrownd-color">
      <h1>Carrito:</h1>
      <Row className="justify-content-center">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <div className="vaciar-carro-total">
          <h3>Total : $ {total}</h3>
          <button className="btn btn-primary bg-black" onClick={clear}>
            Eliminar Carrito
          </button>
        </div>
      </Row>
      <h2>Datos para su envío: </h2>
      <Form className="compra-formulario">
        <Form.Group className="mb-3 email-imput">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            value={buyer.email}
            type="email"
            placeholder="name@example.com"
            name="email"
          />
          <Form.Label>Repetir Email</Form.Label>
          <Form.Control
            id="repeatEmail"
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            value={buyer.name}
            type="text"
            placeholder="Nombre Apellido"
            name="name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            value={buyer.phone}
            onChange={handleInputChange}
            type="phone"
            placeholder="Solo números"
            name="phone"
          />
        </Form.Group>
        <Button onClick={sendOrder} className="btn btn-primary bg-black mb-3">
          Terminar compra.
        </Button>
      </Form>
    </Container>
  );
};

const SweetAlert = (icono, titulo,  mensaje) => {
  Swal.fire({
    position: "center",
    icon: icono,
    title: titulo,
    text: mensaje,
    color: "#ffffff",
    background: "#191919",
    confirmButtonColor: "#000000",
  });
};