import React from 'react';
import {
  makeStyles, createStyles, Container, Grid, Theme, Paper, Box, withTheme,
} from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import HomePageContent from '../components/HomePageContent';
import Image from '../static/background.jpg'; // Import using relative path

const useStyles = makeStyles((theme: Theme) => createStyles({
  /**
     * Flexgrow is used for the entire page
     */
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(6),
    margin: 20,
    width: 300,
    textAlign: 'center',
    color: '#777777',
    backgroundColor: '#222222',
  },
  container: {
    padding: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(10),
    margin: theme.spacing(2),
    fontSize: 30,
    color: '#EEEEEE',
    textAlign: 'center',
    backgroundColor: fade('#301934', 0.8),
  },
  button: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  box: {
    margin: 20,
    color: theme.palette.text.primary,
    backgroundColor: '#000000',
  },
  header: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontSize: 24,
  },
  autocomplete: {
    color: 'purple',
    backgroundColor: 'rgb(200,200,200)',
    borderRadius: 4,
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'black',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      color: 'black',
      backgroundColor: 'white',
    },
    '&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      backgroundColor: 'white',
    },
    autocompleteInput: {
      color: 'black',
    },

  },

}));

function HomePage() {
  const classes = useStyles();
  const styles = {
    paperContainer: {
      backgroundImage: `url(${Image})`,
    },
  };

  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} alignItems="center">
            <Paper className={classes.paper}>
              Welcome to Sparpe
              <HomePageContent classes={classes} />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default (HomePage);
