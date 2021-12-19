import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Classes from './Navbar.css'

function Header() {
    return <div>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Data Table Inovua</Navbar.Brand>
            <Nav className={Classes.navBar}>
            <Link to = '/'>Home</Link>
            <Link to = '/newitem'>Add</Link>
            </Nav>
            </Container>
        </Navbar>
    </div>
}

export default Header