import React from "react";
import Users from "./components/Users";
import Register from "./components/Register";
import Login from "./components/Login";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { SnackbarProvider } from "notistack";
import { withStyles, ThemeProvider, createMuiTheme } from "@material-ui/core";
import { connect } from "react-redux";
import { actionLogin } from "./actions";
import { getUserByToken } from "./api";
import { blue } from "@material-ui/core/colors/";

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const styles = () => {
  return {
    app: {
      margin: 8
    }
  };
};

class App extends React.Component {
  async componentDidMount() {
    this.props.setUser(await getUserByToken());
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <SnackbarProvider maxSnack={3} dense preventDuplicate>
            <BrowserRouter>
              <Header user={this.props.user} />
              <Switch>
                <Route path="/users" exact>
                  <Users></Users>
                </Route>
                <Route path="/register" exact>
                  <Register setUser={this.props.setUser}></Register>
                </Route>
                <Route path="/login" exact>
                  <Login setUser={this.props.setUser}></Login>
                </Route>
                <Route path="/*">Loh loh loh</Route>
              </Switch>
            </BrowserRouter>
          </SnackbarProvider>
        </div>
      </ThemeProvider>
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
