import React, { useState } from "react";
import { withStyles, Paper, Button, List, ListItem, Typography } from "@material-ui/core";
import { getRecepies } from "../api/index"
import RecepiesMenu from "./RecepiesMenu";
import { blue } from "@material-ui/core/colors";

const classes = theme => ({
  filterButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 10,
    '& > button': {
      borderColor: theme.palette.primary[100],
      marginLeft: 5,
      marginRight: 5,
      '&:hover': {
        color: theme.palette.primary.main,
      }
    }
  },
  paperContainer: {
    display: "flex",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20
  },
  paperImage: {
    width: "40%",
    height: "auto",
  },
  descriptionContainer: {
    display: 'flex',
  },
  descriptionList: {
    marginLeft: 10
  }
});

function generateImgUrl() {
  return `https://i.picsum.photos/id/${~~(Math.random() * 1000)}/800/480.jpg`;
}

function ToggleButton(props) {
  const [selected, setSelected] = useState(false)

  const styles = {
    selected: {
      color: blue[200]
    }
  }

  return (
    <Button style={selected ? styles.selected : {}} onClick={(ev) => { setSelected(!selected); props.onClick(ev); }}>{props.children}</Button>
  )
}
class RecepiesPage extends React.Component {
  state = {
    recepies: [],
    bigImageUrl: generateImgUrl(),
    tags: ['Kosher', 'Low callories', 'Fiteness', 'Vegetarian', 'Raw food', 'vsyakie'],
    recepie: null
  }

  async componentDidMount() {
    const recepies = (await getRecepies()).data;
    this.setState({ recepies })
  }

  handleRecepiesMenuSelect = (event, id) => {
    const recepie = this.state.recepies.find(recepie => recepie._id === id);
    this.setState({ recepie })
    console.log(recepie);
  }

  tags = {};
  handleTagSelect = async (tag, ev) => {
    this.tags[tag] = !this.tags[tag]
    const selectedTags = [];
    for (const [tag, status] of Object.entries(this.tags)) {
      if (status) selectedTags.push(tag);
    }
    const recepies = await getRecepies(selectedTags);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.filterButtonContainer}>
          {this.state.tags.map((tag) => (<ToggleButton onClick={(ev) => this.handleTagSelect(tag, ev)} key={tag} >{tag}</ToggleButton>))}
        </div>
        <div className={classes.paperContainer}>
          {this.state.recepie && <Paper className={classes.descriptionContainer}>
            <img src={this.state.recepie?.bigSlide?.imageUrl} className={classes.paperImage}></img>
            <div className={classes.descriptionList}>
              <Typography>Recepie Name: {this.state.recepie.name}</Typography>
              <Typography>Cooking Time: {this.state.recepie.timeOfCooking}</Typography>
              <Typography>Description: {this.state.recepie.description}</Typography>
              <List component="ol" dense={true}>
                {this.state.recepie.cookingSteps.map((step, i) => (<ListItem>{i + 1}. {step}</ListItem>))}
              </List>
            </div>
          </Paper>}
        </div>
        <RecepiesMenu onSelect={this.handleRecepiesMenuSelect} data={this.state.recepies}></RecepiesMenu>
      </div>
    );
  }
}

export default withStyles(classes)(RecepiesPage);
