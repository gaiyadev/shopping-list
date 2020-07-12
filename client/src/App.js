import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store/store';
import AppBar from './components/Navbar/AppBar';
import ShoppingList from './components/ShoppingList/List';
import ItemModal from './components/ItemModal/Modal';
import { Container } from 'reactstrap';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppBar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}


export default App;
