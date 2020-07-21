import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser, selectIsLoading } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import Header from './components/header/header';
import Spinner from './components/spinner/spinner';
import ErrorBoundary from './components/error-boundary/error-boundary';
import AuthRoute from './components/auth-route/auth-route';

import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('./pages/home_page'));
const SignInPage = lazy(() => import('./pages/signin_page'));
const ShopPage = lazy(() => import('./pages/shop_page'));
const CheckoutPage = lazy(() => import('./pages/checkout_page'));
const AddCollectionPage = lazy(() => import('./pages/admin/addcollection_page'));
const AddProductPage = lazy(() => import('./pages/admin/addproduct_page'));

const App = ({ checkUserSession, isLoading, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  if(isLoading) {
    return <Spinner />
  }

  return (
    <div>
      <GlobalStyle />
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={HomePage}/>
              <Route path='/shop' component={ShopPage}/>
              <Route exact path='/checkout' component={CheckoutPage}/>
              <Route exact path='/signin' render={
                () => currentUser ? (<Redirect to='/'/>) : (<SignInPage />)
              }/>
              <AuthRoute exact path='/add-collection' component={AddCollectionPage}/>
              <AuthRoute exact path='/add-product' component={AddProductPage}/>
            </Suspense>
          </ErrorBoundary>
        </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isLoading: selectIsLoading
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
