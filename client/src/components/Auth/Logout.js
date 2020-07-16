import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/authActions';
import { NavLink } from 'reactstrap';
import PropTypes from 'prop-types';


class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    }
    render() {
        return (
            <Fragment>
                <NavLink className="text-white" onClick={this.props.logout} href="#" >Logout</NavLink>
            </Fragment>
        );
    }
}

export default connect(null, { logout })(Logout);