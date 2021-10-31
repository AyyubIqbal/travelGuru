import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >travelGuru</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end" >
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>

                        {user?.email ?
                            <span className='d-flex'>
                                <Nav.Link as={Link} to="/addservice">Add A Service</Nav.Link>
                                <Nav.Link as={Link} to="/manageorder">Manage Orders</Nav.Link>
                                <Nav.Link as={Link} to="/myorder">My Orders</Nav.Link>
                                <Button onClick={logOut} className='btn btn-primary'>Logout</Button>
                            </span> :
                            (<Nav.Link as={Link} to="/login">Login</Nav.Link>)}

                        <Navbar.Text>
                            <small className='ms-2'>{user.displayName}</small>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;