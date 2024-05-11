import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './form.scss';

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Button variant="primary" type="submit">
        ADD GOAL
      </Button>
    </Form>
  );
}

export default Formulario;