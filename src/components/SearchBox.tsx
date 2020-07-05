// eslint-disable jsx-props-no-spreading
import React from 'react';
// eslint-disable-next-line
import {
  Typography, Grid, Card, TextField, makeStyles, fade,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { withRouter, RouteComponentProps } from 'react-router-dom';

export interface Props {
    classes: Record<string, string>;
    searchSuggestions: string[];
    searchInputChanged: (event: any) => void;
    artistSelected: (event: any, value: any) => void;
    }

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: 'rgb(200,200,200)',
    backgroundColor: fade('rgb(10, 10, 10)', 0.5),
    '&:hover ': {
      color: 'rgb(200,200,200)',
      backgroundColor: fade('rgb(10, 10, 10)', 0.8),
    },
    '&.Mui-focused': {
      color: 'rgb(200,200,200)',
      backgroundColor: fade('rgb(10, 10, 10)', 0.9),
    },
    '& .MuiAutocomplete-.listBox': {
      color: 'green',
      backgroundColor: 'blue',
    },
  },
}));

export default function SearchBox(props: {
  classes: Record<string, string>,
  searchSuggestions: string[],
  searchInputChanged: (event: any) => void,
  artistSelected: (event: any, value: any) => void,
}) {
  const specialClass = useStyles();
  return (
    <Autocomplete
      id="search text"
      options={props.searchSuggestions}
      classes={specialClass}
      renderInput={(params) => (
        <TextField
          {...params}
          className={specialClass.inputRoot}
          margin="normal"
          variant="outlined"
          // InputLabelProps={{
          //   style: { color: '#888888' },
          // }}
        />
      )}
      onInputChange={props.searchInputChanged}
      onChange={props.artistSelected}
      autoHighlight
      disableClearable
      forcePopupIcon={false}
      // ListboxProps={{
      //   style: {
      //     color: 'rgb(200,200,200)',
      //     selectionColor: 'green',
      //     backgroundColor: fade('rgb(10, 10, 10)', 1),
      //   },
      // }}
    />
  );
}
