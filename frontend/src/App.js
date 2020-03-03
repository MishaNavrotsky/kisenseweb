import React from 'react';
import Users from "./components/Users"
import Register from "./components/Register"
import Login from "./components/Login"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/users" exact component={Users} />
          <Route path="/register" exact component={Register}/>
          <Route path="/login" exact component={Login}/>
          <Router path='/*' >
            Loh
          </Router>
        </Switch>
      </Router>
    );
  }
}

export default App;
