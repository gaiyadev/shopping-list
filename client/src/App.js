import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store/store';
import AppBar from './components/Navbar/AppBar';
import ShoppingList from './components/ShoppingList/List';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppBar />
          <ShoppingList />
        </div>
      </Provider>
    );
  }
}


export default App;
