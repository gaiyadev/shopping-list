import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import AppBar from './components/Navbar/AppBar';
import ShoppingList from './components/ShoppingList/List';
import ItemModal from './components/ItemModal/Modal';
import { Container } from 'reactstrap';
import { loadUser } from './redux/actions/authActions';
import './App.css';


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
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
