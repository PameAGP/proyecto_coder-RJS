import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { ItemDetail } from "./ItemDetail";

import Container from "react-bootstrap/Container";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const dataBase = getFirestore();

    const refDoc = doc(dataBase, "items", id);

    getDoc(refDoc).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() });
    });
  }, [id]);

  return (
    <Container className="backgrownd-color">
      {item ? <ItemDetail item={item} /> : <>Cargando...</>}
    </Container>
  );
};
