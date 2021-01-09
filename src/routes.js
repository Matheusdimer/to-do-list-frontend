import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Application from "./pages/Application";
import { AuthProvider, AuthContext } from "./contexts/authContext";

function PrivateRoute({ component: Component, ...rest }) {
  const session = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        !session.loggedIn ? (
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
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/app" component={Application} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}
