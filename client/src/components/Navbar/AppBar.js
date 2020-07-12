import React, { Component } from 'react';
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
                                    <NavLink
                                        className="text-white"
                                        href="/">
                                        Sigin up</NavLink>
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