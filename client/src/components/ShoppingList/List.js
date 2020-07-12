import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuid } from 'uuid';
import styles from '../../components/ShoppingList/List.module.css';

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: uuid(), name: 'eggs' },
                { id: uuid(), name: 'orange' },
            ]
        };
    }

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
    deleteItemHandler = (id) => {
        const deleteItem = [...this.state.items];
        this.setState({
            items: deleteItem.filter(item => item.id !== id)
        });

    }
    render() {
        const { items } = this.state;
        return (
            <Container>
                <Button style={{ marginBotton: '2rem' }}
                    onClick={this.addItemHandler}
                    color="dark">
                    Add Item</Button>
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

export default ShoppingList;