import React from "react";

import { SnackbarProvider } from "notistack";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

import { blue } from "@material-ui/core/colors/";
import Routes from "./Routes";
const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3} dense preventDuplicate>
          <Routes />
        </SnackbarProvider>
      </ThemeProvider>
    );
  }
}

export default App;
export { theme };
