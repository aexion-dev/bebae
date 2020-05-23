import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import SignInPage from './pages/signin_page';
import HomePage from './pages/home_page';
import ShopPage from './pages/shop_page';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInPage}/>
      </Switch>
    </div>
  );
}

export default App;
