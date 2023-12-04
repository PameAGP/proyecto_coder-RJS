import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const ItemCounter = ({onAdd}) => {
  return (
    <Form className="aumentar-reducir d-flex">
      <Button className="bg-black" variant="primary">
        -
      </Button>
      <Form.Control placeholder="1" />
      <Button onClick={onAdd} className="bg-black" variant="primary">
        +
      </Button>
    </Form>
  );
};
