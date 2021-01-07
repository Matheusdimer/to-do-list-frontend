import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login";
import Register from "./components/Register";
import isAuthenticated from './auth/isAuthenticated'

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

export default function Routes() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path='/app' component={() => <h1>Você logou com sucesso!</h1>} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
}
