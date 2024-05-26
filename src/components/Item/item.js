import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';
import { deleteGoal } from '../../reducers/goalsSlice';
import { deleteTask } from '../../reducers/tasksSlice';
import { useDispatch, useSelector } from 'react-redux';

function Item(props) {

  const option = useSelector((state) => state.option.value);
  const dispatch = useDispatch();
  
  const deleteItemFun = (option, id) => {
    console.log(option)
    if(option==='tasks'){
      dispatch(deleteTask(id))
    } else if (option === 'goals') {
      dispatch(deleteGoal(id))
    }
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
        <Button variant="primary" onClick={() => deleteItemFun(option, props.id)}>Terminar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;