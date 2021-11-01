import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headerLogo from '../../../../img/footerImg/footer-logo.png'
import useAuth from '../../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar style={{ backgroundColor: 'khaki' }} className="navbar" bg="" variant="light" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home"><img src={headerLogo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/services">Destination</Nav.Link>

                        {/* <Nav.Link as={HashLink} to="/aboutus">About Us</Nav.Link> */}
                        {/* <Nav.Link as={HashLink} to="/myOrders">My Orders</Nav.Link>
                        <Nav.Link as={HashLink} to="/manageOrders">Manage Order</Nav.Link>
                        <Nav.Link as={HashLink} to="/addservice">Add Service</Nav.Link> */}

                        <Nav.Link as={HashLink} to="/admindashboard">Admin</Nav.Link>
                        <Nav.Link as={HashLink} to="/aboutus">AboutUs</Nav.Link>
                        <Nav.Link as={HashLink} to="/contactus">ContactUs</Nav.Link>



                        {
                            user?.email
                                ?
                                <Button onClick={logOut} variant="danger">Logout</Button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                        <Navbar.Text className="text-dark display-name">
                            <a className="text-dark mx-2" href="#login"> {user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;