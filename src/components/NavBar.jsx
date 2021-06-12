import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HiOutlineEmojiSad } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userData, userSignedIn } from '../features/user/userSlice';

const NavBar = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.user.isSignedIn);
    const userInfo = useSelector(state => state.user.userData);
    const image = userInfo?.image?.data.url;

    const handleLogOut = () => {
        dispatch(userSignedIn(false))
        dispatch(userData(null))
        history.push('/')
    }

    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="/"><b>NEWS-MANIA</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {user ? (<>
                            <img src={image} alt=""
                                style={{ borderRadius: '50%', height: '40px' }} />
                            <div className="d-flex align-items-center mx-2">
                                <h6> <b>{userInfo.name}</b></h6>
                            </div>
                            <button onClick={handleLogOut}
                                style={{ padding: '2px 20px', border: 'none',borderRadius:'20px' }}
                                className="bg-info"><b>logout</b></button>
                        </>) : (<Nav.Link to="/">User not available .
                            <HiOutlineEmojiSad className="bg-warning" style={{ borderRadius: '50%' }} />
                        </Nav.Link>)}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;