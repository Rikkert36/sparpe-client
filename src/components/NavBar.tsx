import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  appbar: {
    flex: 1,
  },
  title: {
    // flexGrow: 1,
    paddingRight: theme.spacing(4),
  },
  logo: {
    width: 30,
    paddingRight: 10,
  },
}));

function HomePageNav(props: RouteComponentProps<{}> & {children?: JSX.Element }) {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar variant="dense">
        {/** <img className={classes.logo}  alt="SpotifyListsLogo" */}
        <Typography variant="h6" className={classes.title}>
          Spotify Lists
        </Typography>
        {props.children}
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(HomePageNav);
