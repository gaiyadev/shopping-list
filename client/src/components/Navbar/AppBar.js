import React, { Component } from 'react';
import RegisterModal from '../Auth/RegisterModal';
import Logout from '../Auth/Logout';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
} from 'reactstrap';

class AppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleHandler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <div>
                <Navbar color="primary" light expand="md" className="mb-5 ">
                    <Container>
                        <NavbarBrand href="/">MERN</NavbarBrand>
                        <NavbarToggler onClick={this.toggleHandler} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto " navbar >
                                <NavItem>
                                    <NavLink
                                        className="text-white"
                                        href="/components/">
                                        Sign in
                                        </NavLink>
                                </NavItem>
                                <NavItem>
                                    <RegisterModal />
                                </NavItem>
                                <NavItem>
                                    <Logout />
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}


export default AppBar;