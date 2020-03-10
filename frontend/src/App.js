import React from 'react';
import Users from "./components/Users"
import Register from "./components/Register"
import Login from "./components/Login"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import { SnackbarProvider } from 'notistack';
import { withStyles } from "@material-ui/core"

const styles = () => {
  return {

  };
}


class App extends React.Component {
  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <div>
        <SnackbarProvider maxSnack={3} dense preventDuplicate>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route path="/users" exact component={Users} />
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={Login} />
              <Route path='/*' >
                Loh loh loh
              </Route>
            </Switch>
          </BrowserRouter>
        </SnackbarProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
