import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../../actions/itemAction';
import styles from '../../components/ShoppingList/List.module.css';
import PropTypes from 'prop-types';

class ShoppingList extends Component {

    //..Func to Add Item
    addItemHandler = () => {
        const name = prompt('Enter item');
        if (name) {
            this.setState(state => ({
                items: [
                    ...this.state.items,
                    { id: uuid(), name: name }
                ]
            }));
        }
    }

    // Func to Delete Item
    deleteItemHandler = (id) => {
        this.props.deleteItem(id);
    }

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const { items } = this.props.item;
        return (
            <Container>
                {/* <Button style={{ marginBotton: '2rem' }}
                    onClick={this.addItemHandler}
                    color="dark">
                    Add Item</Button> */}
                <ListGroup className="mt-5">
                    <TransitionGroup className="shopping-list">
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames={styles.Fade} >
                                <ListGroupItem>
                                    <Button className={styles.removeBtn}
                                        onClick={() => this.deleteItemHandler(id)}
                                        color="danger" size="sm">&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}

                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}


ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
}


const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);