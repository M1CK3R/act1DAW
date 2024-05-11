import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';

function Item({nombre, descripcion, fecha}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='fw-bold'>
            Name
        </Card.Text>
        <Card.Text>
            {nombre}
        </Card.Text>
        <Card.Text className='fw-bold'>
          Description
        </Card.Text>
        <Card.Text>
            {descripcion}
        </Card.Text>
        <Card.Text className='fw-bold'>
          Due date
        </Card.Text>
        <Card.Text>
            {fecha}
        </Card.Text>
        <Button variant='primary'>Editar</Button>
        <Button variant="primary">Terminar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;