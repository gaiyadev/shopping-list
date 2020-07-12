import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './components/Navbar/AppBar';
import ShoppingList from './components/ShoppingList/List';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <AppBar />
      <ShoppingList />
    </div>
  );
}

export default App;
