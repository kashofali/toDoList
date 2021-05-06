import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import EventNoteIcon from '@material-ui/icons/EventNote';
import Clock from "./Clock";

const useStyles = makeStyles((theme) => ({
  root: {
  },
  title: {
    paddingLeft: "1rem"
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div >
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <EventNoteIcon/>
          <Typography variant="h5" className={classes.title}>
            To-Do List
          </Typography>
          <Clock />
        </Toolbar>
      </AppBar>
    </div>
  );
}
