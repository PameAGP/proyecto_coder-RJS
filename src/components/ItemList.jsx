import { Item } from "./Item";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export const ItemList = ({ items }) => {
  return (
    <Container className="fluid-md">
      <Row className="justify-content-md-center">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Row>
    </Container>
  );
};
