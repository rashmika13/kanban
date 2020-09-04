import React from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import quotes from "../utils/quotes";
const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(2),
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    flexGrow: 1,
    color: "white",
  },
  btn: {
    color: "#fff",
    background: "hsla(0,0%,100%,.24)",
  },
  quoteContent: {
    color: "white",
  },
}));

export default function TopBar({ setOpen }) {
  const quotesIdx = Math.floor(Math.random() * quotes.length);
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        i-Kan <div className={classes.quoteContent}>{quotes[quotesIdx]}</div>
      </Typography>
      <Button className={classes.btn} onClick={() => setOpen(true)}>
        Change Background
      </Button>
    </div>
  );
}
