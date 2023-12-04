import { useParams } from "react-router-dom";
import { useDebugValue, useEffect, useState, useContext } from "react";
import Container from "react-bootstrap/Container";

import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

import { ItemList } from "./itemList";

export const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);


  const { id } = useParams();

  //Trae uno sola:
  // useEffect(() => {

  //   const dataBase = getFirestore();

  //   const refDoc = doc(dataBase, "items", "EAWYiZJBdKLThAbobf4S");

  //   getDoc (refDoc).then((snapshot) => {
  //     console.log({id: snapshot.id, ...snapshot.data() });
  //   });

  // }, []);

  //Trae TODES
  useEffect(() => {
    const dataBase = getFirestore();

    const refCollection = !id
      ? collection(dataBase, "items")
      : query(collection(dataBase, "items"), where("category", "==", id));

    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) console.log("Sin resultados");
      else
        setItems(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
    });
  }, [id]);

  //Por categoría
  //   useEffect(() => {
  //   const dataBase = getFirestore();
  //   const qry = query(
  //     collection(dataBase, "items"),
  //     where("category", "==", "mujer")
  //   );
  //   getDocs(qry).then((snapshot) => {
  //     if (snapshot.size === 0) console.log("Sin resultados");
  //     else
  //     console.log(
  //       snapshot.docs.map((doc) => {
  //         return { id: doc.id, ...doc.data() };
  //       })
  //       );
  //     });
  // }, []);

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(collection);
    }, 2000);
  });

  return (
    <Container className="backgrownd-color">
      <h1>
        {props.greeting}
      </h1>

      <ItemList items={items} />
    </Container>
  );
};
