import React from "react";
import {
  Paper,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  withStyles
} from "@material-ui/core";

const classes = theme => ({
  container: {
    marginLeft: 72,
    marginRight: 72,
    marginBottom: 20,
    marginTop: 10
  },
  downloadButton: {
    marginLeft: "auto"
  }
});
class ApplicationDetails extends React.Component {
  render() {
    const { details, classes, user } = this.props;
    console.log(user);
    return (
      <div className={classes.container}>
        <Paper>
          <Card>
            <CardContent>
              <Typography>{details.name}</Typography>
              <Typography variant="body2" component="p">
                description.
              </Typography>
              <Typography variant="body2" component="p">
                {details.text}
              </Typography>
            </CardContent>
            <CardActions>
              {user ? (
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  className={classes.downloadButton}
                >
                  Download
                </Button>
              ) : null}
            </CardActions>
          </Card>
        </Paper>
      </div>
    );
  }
}

export default withStyles(classes)(ApplicationDetails);
