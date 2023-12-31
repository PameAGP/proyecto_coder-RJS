import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Item = ({ item }) => {
  return (
    <Card className="card card-animation" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.pictureUrl} alt={item.title} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>$ {item.price}</Card.Text>
        <Link to={`/item/${item.id}`}>
          <Button className="bg-black" variant="primary">
            Ver
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
