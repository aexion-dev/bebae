import React from 'react';
import { auth } from './firebase/firebase.utils';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import SignInPage from './pages/signin_page';
import HomePage from './pages/home_page';
import ShopPage from './pages/shop_page';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
