import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useState } from "react";



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

  return (

        <Form className="aumentar-reducir">
      <Button onClick={handleDecrease} className="bg-black" variant="primary">
        -
      </Button>
      <Form.Control placeholder="1" value={count} onChange={handleInputChange}/>
      <Button onClick={handleIncrease} className="bg-black" variant="primary" >
        +
      </Button>
      <Button onClick={() => onAdd (count)} className="bg-black agregar-al-carrito" variant="primary"> Agregar al Carrito</Button>
    </Form>


  );
};
