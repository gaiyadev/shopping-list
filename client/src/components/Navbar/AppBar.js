import React, { Component, Fragment } from 'react';
import RegisterModal from '../Auth/RegisterModal';
import LoginModal from '../Auth/LoginModal';
import Logout from '../Auth/Logout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    toggleHandler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        const { isAuthenticated, user } = this.props;
        console.log(this.props);
        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className="navbar-text mr-3">
                        <strong>{user ? `Welcome ${user.name}` : ''}</strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout />
                </NavItem>
            </Fragment>
        );
        const guestLinks = (
            <Fragment>
                <NavItem>
                    <LoginModal />
                </NavItem>
                <NavItem>
                    <RegisterModal />
                </NavItem>
            </Fragment>);
        return (
            <div>
                <Navbar color="primary" light expand="md" className="mb-5 ">
                    <Container>
                        <NavbarBrand href="/">MERN</NavbarBrand>
                        <NavbarToggler onClick={this.toggleHandler} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto " navbar >
                                {isAuthenticated ? authLinks : guestLinks}

                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    auth: state.auth

});

export default connect(mapStateToProps, null)(AppBar);