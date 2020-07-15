import React, { Component } from 'react';
import { login } from '../../redux/actions/authActions';
import { clearErrors } from '../../redux/actions/errorActions';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    ModalFooter,
    Label,
    NavLink,
    Input,
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            email: '',
            password: '',
            msg: null
        }
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            //Check for register error
            if (error.id === 'LOGIN FAIL') {
                this.setState({
                    msg: error.msg.msg
                });
            } else {
                this.setState({
                    msg: null
                });
            }
        }
        //Chekckin auth/ close modal
        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggleHandler();
            }
        }
    }

    toggleHandler = () => {
        //Clear error
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        })
    };

    onSubmitHandler = (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        //Create a user object
        const user = {
            email: email,
            password: password
        };
        // Attempt to login a user
        this.props.login(user)
    }

    onChangeHandler = event => {
        const inputVal = event.target.value;
        this.setState({
            [event.target.name]: inputVal
        });
    }

    render() {
        return (
            <div>
                <NavLink className="text-white" href="#" onClick={this.toggleHandler}>Login</NavLink>
                <Modal isOpen={this.state.modal} toggle={this.toggleHandler}>
                    <ModalHeader toggle={this.toggleHandler}>Login</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}
                        <Form autoComplete="off" onSubmit={this.onSubmitHandler}>
                            <FormGroup>

                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="mb-3"
                                    placeholder="Your Email"
                                    onChange={this.onChangeHandler} />

                                <Label for="pasword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    className="mb-3"
                                    id="password"
                                    placeholder="Your Password"
                                    onChange={this.onChangeHandler} />

                            </FormGroup>


                            <Button type="submit" className="btn btn-lg mt-5" color="primary">login</Button>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggleHandler}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);