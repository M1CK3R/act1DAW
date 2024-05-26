import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './menu.scss';
import { setOption } from '../../reducers/optionSlice'
import { useDispatch, useSelector } from 'react-redux';

function Menu() {

  const option = useSelector((state) => state.option.value);
  const dispatch = useDispatch();

  const changeOptionFun = (eventKey)=>{
    dispatch(setOption(eventKey));
  }

  return (
    <Navbar bg='colorPers' expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={option} onSelect={changeOptionFun} className="me-auto">
            <Nav.Link eventKey={'tasks'} >Tasks</Nav.Link>
            <Nav.Link eventKey={'goals'} >Goals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;