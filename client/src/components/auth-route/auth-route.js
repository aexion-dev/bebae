import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser, selectIsLoading } from '../../redux/user/user.selectors';

const AuthRoute = ({ currentUser, isLoading, component: Component, ...rest }) => {
  if(!isLoading) {
    return (
      <Route {...rest} component={(props) => (
        currentUser ? <Component {...props} /> : <Redirect to='/signin' />
      )} />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isLoading: selectIsLoading
});

export default connect(mapStateToProps)(AuthRoute);
