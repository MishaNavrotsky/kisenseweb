import React from "react";
import Users from "./components/Users";
import Register from "./components/Register";
import Login from "./components/Login";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { SnackbarProvider } from "notistack";
import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { actionLogin } from "./actions";
import { getUserByToken } from "./api";

const styles = () => {
  return {};
};

class App extends React.Component {
  async componentDidMount() {
    this.props.setUser(await getUserByToken());
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <SnackbarProvider maxSnack={3} dense preventDuplicate>
          <BrowserRouter>
            <Header user={this.props.user} />
            <Switch>
              <Route path="/users" exact>
                <Users {...this.props}></Users>
              </Route>
              <Route path="/register" exact>
                <Register {...this.props}></Register>
              </Route>
              <Route path="/login" exact>
                <Login {...this.props}></Login>
              </Route>
              <Route path="/*">Loh loh loh</Route>
            </Switch>
          </BrowserRouter>
        </SnackbarProvider>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.api.user
  };
};

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(actionLogin(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
