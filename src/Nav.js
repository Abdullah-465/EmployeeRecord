import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav(props) {
  return (
    <>
      <Navbar bg="secondary-emphasis" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='text-primary fs-2'>
            <strong style={{ 'Family': 'Parkavenue' }}>
              <strong>👨‍💼Employees</strong><strong className='text-dark'>Record </strong>
            </strong>
          </Navbar.Brand>
          {props.children}
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;