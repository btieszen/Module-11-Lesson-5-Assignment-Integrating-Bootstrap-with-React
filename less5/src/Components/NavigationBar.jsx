import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
            <Navbar.Toggle aria-controls='navbarScroll' data-bs-target='#navbarScroll' />
            <Navbar.Collapse id='navbarScroll'>
            <NavLink to = '/home' activeClassName='active'>Home</NavLink>  
            <NavLink to = '/shop' activeClassName='active'>Shop Now</NavLink>

    
            </Navbar.Collapse>
        </Navbar>
    );
}
export default NavigationBar;



