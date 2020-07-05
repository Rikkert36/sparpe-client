// eslint-disable jsx-props-no-spreading
import React from 'react';
// eslint-disable-next-line
import {
  Typography, Grid, Card, TextField, makeStyles,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Client, ArtistID } from '../clients/server.generated';
import SearchBox from './SearchBox';

interface Props extends RouteComponentProps {
classes: Record<string, string>;
}

interface State {
 searchSuggestions: string[],
 searchCounter: number
}

class HomePageContent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      searchSuggestions: [],
      searchCounter: 0,
    };
  }

  protected searchInputChanged = (event: any) => {
    this.updateSuggestions(event.target.value);
  }

  protected async updateSuggestions(searchString: string) {
    await this.setState((prevState) => ({
      searchCounter: prevState.searchCounter + 1,
    }));
    const currentCounter = this.state.searchCounter;

    const client = new Client();
    if (searchString !== '' && searchString !== undefined) {
      const artistIDs: ArtistID[] = await client.searchArtist(searchString);
      const searchSuggestions = artistIDs.map((artistID) => artistID.name);

      if (this.state.searchCounter === currentCounter) {
        this.setState({
          searchSuggestions,
        });
      }
    } else {
      console.log('leeg');
      if (this.state.searchCounter === currentCounter) {
        this.setState({
          searchSuggestions: [],
        });
      }
    }
  }

  protected async artistSelected(event: any, value: any) {
    if (!((event.target.textContent === '' || event.target.textContent == null) && (value == null || value === ''))) {
      let artist = event.target.textContent;
      if (artist === '') {
        artist = value;
      }
      console.log('Load page of', artist);
      const client = new Client();
      const artistIDs: ArtistID[] = await client.searchArtist(artist);
      const actualName = artistIDs[0].name;
      const { id } = artistIDs[0];
      console.log('Actual name: ', actualName, ', ID:', id);
    }
  }

  public render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        item
        xs={12}
        justify="center"
        alignItems="center"
      >
        <Card className={classes.card}>
          Search an artist:
          <Grid item xs={12}>
            <SearchBox
              searchSuggestions={this.state.searchSuggestions}
              classes={classes}
              searchInputChanged={this.searchInputChanged}
              artistSelected={this.artistSelected}
            />
          </Grid>

        </Card>
      </Grid>
    );
  }
}

export default withRouter(HomePageContent);
