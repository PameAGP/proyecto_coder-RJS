import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useState } from "react";
import Swal from "sweetalert2";



export const ItemCounter = ({onAdd, stock, initial}) => {

const [count, setCount] = useState(initial)



const handleIncrease = () => {
  if (stock > count) {
    setCount (prev => prev + 1);
  }
  
}

const handleDecrease = () => {
  if (count > 1){
    setCount (prev => prev -1)
  }
  
}

const handleInputChange = (event) => {
  setCount(parseInt(event.target.value, stock) || 0);
};

const handleAdd = () => {
  
  onAdd (count)
  setCount (initial);
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    text: "Se agregó: " +item.title+ " al carrito" ,
    background: "#191919",
    confirmButtonColor: "#000000",
  });
}

  return (

        <Form className="aumentar-reducir">
      <Button onClick={handleDecrease} className="bg-black" variant="primary">
        -
      </Button>
      <Form.Control placeholder="1" value={count} onChange={handleInputChange}/>
      <Button onClick={handleIncrease} className="bg-black" variant="primary" >
        +
      </Button>
      <Button onClick={handleAdd} className="bg-black agregar-al-carrito" variant="primary"> Agregar al Carrito</Button>
    </Form>


  );
};
