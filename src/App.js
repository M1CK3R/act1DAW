import './App.scss';
import Item from './components/Item/item.js'
import Formulario from './components/Form/form.js';
import Menu from './components/Menu/menu.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MobileButton from './components/MobileButton/mobileButton.js'
import { useSelector } from 'react-redux';


function App() {
  const goals = useSelector((state) => state.goals.value);
  const option = useSelector((state) => state.option.value);
  const tasks = useSelector((state) => state.tasks.value);
  

  const listaItems = () => {
    if(option === 'goals') {
      return goals.map((goal, index) => (
        <Item key={index} nombre={goal.nombre} descripcion={goal.descripcion} fecha={goal.fecha} id={goal.id} />
      ))
    } else if (option === 'tasks') {
      return tasks.map((task, index) => (
        <Item key={index} nombre={task.nombre} descripcion={task.descripcion} fecha={task.fecha} id={task.id} />
      ))
    }
  }

  return (
    <div className='App'>
      <Menu />
      <Container>
      <Row>
        <Col xs={0} md={0} className='d-none d-sm-block d-sm-none d-md-block'> <Formulario /> </Col>
        <Col xs={0} sm={0}>
          <Row className='d-md-none'>
            <div className='bg-transparent overlapping-div'>
              <MobileButton className='float-left' />
            </div>  
          </Row>
          <Row>
            <div className='scrolling'>
              {listaItems()}

            </div>
          </Row>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
