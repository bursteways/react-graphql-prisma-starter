import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      whiteSpace: "nowrap",
      marginBottom: theme.spacing(1)
    },
    divider: {
      margin: theme.spacing(2, 0)
    }
  })
);

export const Home = () => {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={8} sm={12} xs={12}>
          <Paper className={classes.paper}>xs=8</Paper>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Paper className={classes.paper}>xs=4</Paper>
        </Grid>
      </Grid>
    </main>
  );
};
