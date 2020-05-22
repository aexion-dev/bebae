import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import HomePage from './pages/home_page';
import ShopPage from './pages/shop_page';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
