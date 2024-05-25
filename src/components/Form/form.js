import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './form.scss';
import { useDispatch } from 'react-redux';
import { addGoal } from '../../reducers/goalsSlice';
import { useRef } from 'react';

function Formulario() {

  const inputRefNombre = useRef();
  const inputRefDesc = useRef();
  const inputRefFecha = useRef();

  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();
    dispatch(addGoal({'nombre':inputRefNombre.current.value, 'descripcion':inputRefDesc.current.value, 'fecha':inputRefFecha.current.value}));
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" ref={inputRefNombre} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" ref={inputRefDesc} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" ref={inputRefFecha} />
      </Form.Group>
      <Button variant="primary" onClick={addItem} type="submit">
        ADD GOAL
      </Button>
    </Form>
  );
}

export default Formulario;