import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DeleteIcon from "@material-ui/icons/Delete";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "url(./img/todo.png)",
    backgroundSize: "cover",
    // backgroundColor: "#e4fbff",
    color: "#e7e6e1",
    height: "55rem",
    overflowY: "scroll",
    width: "100%",
  },
  container: {
    maxWidth: 560,
  },
  heading: {
    color: "#3258a5",
    textAlign: "center",
    padding: "6rem 0 2rem",
  },
  textfield: {
    width: "80%",
    paddingRight: "0.5rem",
  },
  listItem: {
    backgroundColor: "#3258a5",
    borderRadius: "12px",
    margin: "0.5rem 0.3rem 0.5rem 2.4rem",
    textAlign: "center",
    width: "70%",
  },
}));

export default function ToDoList() {
  const classes = useStyles();

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState(["Buy Milk", "Buy Veggies"]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function deleteAll() {
    setItems([]);
  }

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.heading}>
          <Typography variant="h2">To-Do List</Typography>
        </div>
        <div className="form">
          <TextField
            onChange={handleChange}
            type="text"
            value={inputText}
            id="filled-basic"
            label="Add Items"
            variant="filled"
            autoComplete="off"
            className={classes.textfield}
          />
          <Fab
            color="primary"
            aria-label="add"
            onClick={inputText !== "" && addItem}
          >
            <AddIcon />
          </Fab>
        </div>

        <List>
          {items.map((todoItem, index) => (
            <ListItem className={classes.listItem}>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography variant="h4">{todoItem}</Typography>
                  </React.Fragment>
                }
              />
              <ListItemSecondaryAction>
                <Fab
                  color="primary"
                  key={index}
                  onClick={() => {
                    deleteItem(index);
                  }}
                >
                  <DeleteIcon />
                </Fab>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Fab color="primary" onClick={deleteAll} style={{ float: "right" }}>
          <ClearAllIcon />
        </Fab>
      </Container>
      
    </div>
  );
}
