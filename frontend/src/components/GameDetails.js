import React from "react";
import {
  Paper,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  withStyles,
} from "@material-ui/core";

const classes = (theme) => ({
  container: {
    marginLeft: 72,
    marginRight: 72,
    marginBottom: 20,
    marginTop: 10,
  },
  buttons: {
    marginLeft: "auto",
  },
  button: {
    marginRight: 10,
  },
});
class GameDetails extends React.Component {
  render() {
    const { details, classes, user } = this.props;

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
                <div className={classes.buttons}>
                  <Button
                    size="large"
                    color="primary"
                    variant="contained"
                    className={classes.button}
                    onClick={()=>{
                      this.props.setGameUrl(details?.gameUrl)
                      this.props.goTo("/game/"+details?.gameUrl)
                    }}
                  >
                    Play
                  </Button>
                  <Button size="large" color="primary" variant="contained">
                    Download
                  </Button>
                </div>
              ) : null}
            </CardActions>
          </Card>
        </Paper>
      </div>
    );
  }
}

export default withStyles(classes)(GameDetails);
