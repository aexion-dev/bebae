import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import Header from './components/header/header';
import SignInPage from './pages/signin_page';
import HomePage from './pages/home_page';
import ShopPage from './pages/shop_page';
import CheckoutPage from './pages/checkout_page';
import AddCollectionPage from './pages/admin/addcollection_page';
import AddProductPage from './pages/admin/addproduct_page';

import { GlobalStyle } from './global.styles';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route exact path='/signin' render={
          () => currentUser ? (<Redirect to='/'/>) : (<SignInPage />)
        }/>
        <Route exact path='/add-collection' component={AddCollectionPage}/>
        <Route exact path='/add-product' component={AddProductPage}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
