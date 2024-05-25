import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './menu.scss';
import changeOption from '../../reducers/optionSlice'
import { useDispatch, useSelector } from 'react-redux';

function Menu() {

  const option = useSelector((state) => state.option.value);
  const dispatch = useDispatch();

  const changeOptionFun = (e)=>{
    e.preventDefault();
    if(option==='tasks'){
      dispatch(changeOption('goals'));
    } else {
      dispatch(changeOption('tasks'));
    }
  }

  return (
    <Navbar bg='colorPers' expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav defaultActiveKey={option} className="me-auto">
            <Nav.Link eventKey={'tasks'} onClick={changeOptionFun}>Tasks</Nav.Link>
            <Nav.Link eventKey={'goals'} onClick={changeOptionFun}>Goals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;