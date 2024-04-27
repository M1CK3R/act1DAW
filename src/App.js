import './App.scss';
import Item from './components/item.js'
import Formulario from './components/form.js';
import Menu from './components/menu.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className='App'>
      <Menu />
      <Container>
      <Row>
        <Col><Formulario /></Col>
        <Col>
          <Item nombre={'Actividad 1'} descripcion={'Tarea 1 TDS'} fecha={'06/04/25'}/>
          <Item nombre={'Leer'} descripcion={'Leer documentación React'} fecha={'22/04/24'}/>
          <Item nombre={'Terminar el proyecto'} descripcion={'Terminar proyecto de TEI'} fecha={'31/04/24'}/>
          <Item nombre={'Tutoria'} descripcion={'Preparar la tutoria'} fecha={'15/05/24'}/>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
