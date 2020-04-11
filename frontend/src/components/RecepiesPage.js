import React, { useState } from "react";
import { withStyles, Paper, Button } from "@material-ui/core";
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
  },
  paperImage: {
    width: "100%",
    height: "auto",
    margin: "auto"
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
    tags: ['Kosher', 'Low callories', 'Fiteness', 'Vegetarian', 'Raw food', 'vsyakie']
  }

  async componentDidMount() {
    const recepies = (await getRecepies()).data;
    recepies.forEach(recepie => {
      recepie.bigSlide.imageUrl = generateImgUrl();
      recepie.smallSlide.imageUrl = recepie.bigSlide.imageUrl;
    })
    this.setState({ recepies })
  }

  handleRecepiesMenuSelect = (event, n) => {
    const recepie = this.state.recepies.find(recepie => recepie.name === n);
    this.setState({ bigImageUrl: recepie.bigSlide.imageUrl })
  }

  tags = {};
  handleTagSelect = async (tag, ev) => {
    this.tags[tag] = !this.tags[tag]
    const selectedTags = [];
    for(const [tag,status] of Object.entries(this.tags)) {
      if(status) selectedTags.push(tag);
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
          <Paper><img src={this.state.bigImageUrl} className={classes.paperImage}></img></Paper>
        </div>
        <RecepiesMenu onSelect={this.handleRecepiesMenuSelect} data={this.state.recepies}></RecepiesMenu>
      </div>
    );
  }
}

export default withStyles(classes)(RecepiesPage);
