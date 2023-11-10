
import Container from "react-bootstrap/Container";

export const ItemDetail = ({ item }) => {
  return (
    <Container className="padding-superior fluid-md">
        <div className="product-detail"> 
        <img src={item.pictureUrl} alt={item.title} />
            <h1>{item.title}</h1>
            
            <p>{item.description}</p>
            <h4>$ {item.price}</h4>
            <button className="btn btn-primary bg-black"> Agregar al carrito </button>
        </div>
    </Container>
  );
};
