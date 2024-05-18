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
  const goals = useSelector((state) => {
    return state.goals.value
  });

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
              {goals.map((goal) => {
                return <Item key={goal.id} nombre={goal.nombre} descripcion={goal.descripcion} fecha={goal.fecha} id={goal.id} />
              })}
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
