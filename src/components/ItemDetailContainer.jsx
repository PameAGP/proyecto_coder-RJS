import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";


import { products } from "../data/products.json";
import { ItemDetail } from "./ItemDetail";


export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    myPromise.then((response) => {
        const findByID = response.find((item) => item.id === Number(id));
        setItem(findByID);
        
    });

    console.log(item);
  }, [id]);

  return (
    <Container className="backgrownd-color">
        { item ? <ItemDetail item = {item}/> : <>Cargando...</> }
        
    </Container>
  );
};