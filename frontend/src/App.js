import React from "react";
import Users from "./components/Users";
import Register from "./components/Register";
import Login from "./components/Login";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { SnackbarProvider } from "notistack";
import { withStyles, ThemeProvider, createMuiTheme } from "@material-ui/core";
import { connect } from "react-redux";
import { actionLogin, actionShowLoadngScreen } from "./actions";
import { getUserByToken } from "./api";
import { blue } from "@material-ui/core/colors/";
import Loading from "./components/Loading";
import IndexPage from "./components/IndexPage";
import Profile from "./components/Profile";
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
              <Loading open={this.props.loadingScreen} />
              <Switch>
                <Route path="/users" exact>
                  <Users showLoadingScreen={this.props.showLoadingScreen} />
                </Route>
                <Route path="/register" exact>
                  <Register
                    showLoadingScreen={this.props.showLoadingScreen}
                    setUser={this.props.setUser}
                  />
                </Route>
                <Route path="/login" exact>
                  <Login
                    showLoadingScreen={this.props.showLoadingScreen}
                    setUser={this.props.setUser}
                  />
                </Route>
                <Route path="/profile">
                  <Profile />
                </Route>
                <Route path="/">
                  <IndexPage />
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
    user: state.api.user,
    loadingScreen: state.api.loadingScreen
  };
};

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(actionLogin(user)),
  showLoadingScreen: show => dispatch(actionShowLoadngScreen(show))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
