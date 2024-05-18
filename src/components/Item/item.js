import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';
import { deleteGoal } from '../../reducers/goalsSlice';
import { useDispatch, useSelector } from 'react-redux';

function Item(props) {
  const dispatch = useDispatch();
  const value = useSelector(state => state.goals.value);
  
  const deleteItemFun = (id) => {
    console.log(id)
    dispatch(deleteGoal(id))
  }

  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='fw-bold'>
            Name
        </Card.Text>
        <Card.Text>
            {props.nombre}
        </Card.Text>
        <Card.Text className='fw-bold'>
          Description
        </Card.Text>
        <Card.Text>
            {props.descripcion}
        </Card.Text>
        <Card.Text className='fw-bold'>
          Due date
        </Card.Text>
        <Card.Text>
            {props.fecha}
        </Card.Text>
        <Button variant="primary" onClick={() => deleteItemFun(props.id)}>Terminar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;