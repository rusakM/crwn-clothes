import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import Header from "./components/header/header.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { chcekUserSession } from "./redux/user/user.actions";

const App = ({ chcekUserSession, currentUser }) => {
  useEffect(() => {
    chcekUserSession();
  }, [chcekUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact component={HomePage} path="/" />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  chcekUserSession: () => dispatch(chcekUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
