import './App.scss';
import Item from './components/Item/item.js'
import Formulario from './components/Form/form.js';
import Menu from './components/Menu/menu.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MobileButton from './components/MobileButton/mobileButton.js'

function App() {
  return (
    <div className='App'>
      <Menu />
      <Container>
      <Row>
        <Col xs={0} md={0} className='d-none d-sm-block d-sm-none d-md-block'><Formulario /></Col>
        <Col xs={0} sm={0}>
          <Row className='d-md-none'>
            <div className='bg-transparent overlapping-div'>
              <MobileButton className='float-left' />
            </div>  
          </Row>
          <Row>
            <div className='scrolling'>
              <Item nombre={'Actividad 1'} descripcion={'Tarea 1 TDS'} fecha={'06/04/25'}/>
              <Item nombre={'Leer'} descripcion={'Leer documentación React'} fecha={'22/04/24'}/>
              <Item nombre={'Terminar el proyecto'} descripcion={'Terminar proyecto de TEI'} fecha={'31/04/24'}/>
              <Item nombre={'Tutoria'} descripcion={'Preparar la tutoria'} fecha={'15/05/24'}/>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
