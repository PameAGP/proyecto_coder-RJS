import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import { products } from "../data/products.json";

import { ItemList } from "./itemList";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    myPromise.then((response) => {
      if (!id) {
        setItems(response);
      } else {
         const filterByCategory = response.filter((item) => item.category === id);
         setItems(filterByCategory)
      }
    });

    console.log(items);
  }, [id]);

  return (
    <Container className="backgrownd-color">
      <h1>{props.greeting}</h1>
   
      <ItemList items={items} />
    </Container>
  );
};
