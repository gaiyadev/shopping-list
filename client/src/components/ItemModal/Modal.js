import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    ModalFooter,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../../redux/actions/itemAction';
// import { v4 as uuid } from 'uuid';

class ModalWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: ''
        }
    }

    toggleHandler = () => {
        this.setState({
            modal: !this.state.modal
        })
    };

    onSubmitHandler = (event) => {
        event.preventDefault();
        const newItem = {
            // id: uuid(),
            name: this.state.name
        };
        //addItem using redux
        this.props.addItem(newItem);
        //close modal
        this.toggleHandler();
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
                <Button color="primary" onClick={this.toggleHandler}>Add item</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggleHandler}>
                    <ModalHeader toggle={this.toggleHandler}>Add Item</ModalHeader>
                    <ModalBody>
                        <Form autoComplete="off" onSubmit={this.onSubmitHandler}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input type="text" name="name" id="item" placeholder="Add item"
                                    onChange={this.onChangeHandler} />
                            </FormGroup>
                            <Button type="submit" className="btn btn-lg mt-5" color="primary">Add Item</Button>
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

const mapStateToProps = state => {
    return { item: state.item }
};

export default connect(mapStateToProps, { addItem })(ModalWindow);