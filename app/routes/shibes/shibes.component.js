import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import InfiniteScroll from 'react-infinite-scroller';

import { Header } from './header/header.component';
import { ShibesList } from './shibesList/shibesList.component';
import { InitialLoader } from './initialLoader/initialLoader.component';
import { LoadMoreLoader } from './loadMoreLoader/loadMoreLoader.component';
import { Container, ShibesContainer } from './shibes.styles';

const placeholderImage = require('images/placeholder.jpg');

const FAVOURITES_SHIBES_NAME = 'favourites';
const favouritesQueryParam = `?${FAVOURITES_SHIBES_NAME}`;


export class Shibes extends PureComponent {
  static propTypes = {
    shibes: PropTypes.object,
    fetchShibes: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    addToFavourites: PropTypes.func,
    favouritesShibes: PropTypes.object,
    history: PropTypes.object.isRequired,
  };

  state = {
    isLoading: true,
    isFavouritesMode: false,
  };

  componentDidMount() {
    this.props.fetchShibes();
  }

  componentDidUpdate({ isLoading }) {
    console.log('update');
    if (isLoading !== this.props.isLoading) {
      this.setState({
        isLoading: this.props.isLoading
      });
    }
  }

  toggleFavouritesMode = () => {
    if (!this.state.isFavouritesMode) {
      this.props.history.push('?favourites');

      this.setState({
        isFavouritesMode: true,
      });
    } else {
      this.props.history.push('/');

      this.setState({
        isFavouritesMode: false,
      });
    }
  };

  isFavouritesMode = () => this.props.history.location.search === favouritesQueryParam;

  addToFavourites = (shibeImage) => this.props.addToFavourites(shibeImage);
  
  isAddedToFavourites = (shibeImage) => this.props.favouritesShibes.find(image => image === shibeImage);

  renderShibesList = (items) => {
    if (items) {
      return (
        <ShibesList
          items={items}
          placeholderImage={placeholderImage}
          addToFavourites={this.addToFavourites}
          isAddedToFavourites={this.isAddedToFavourites}
        />
      );
    }
  };

  render() {
    const { shibes, favouritesShibes } = this.props;

    if (this.state.isLoading && !shibes.size) {
      return (
        <InitialLoader backgroundImage={`${placeholderImage}`}>loading...</InitialLoader>
      );
    }

    return (
      <Container>
        <Helmet title="Homepage" />
        <Header
          areFavourties={!!this.props.favouritesShibes.size}
          toggleFavouritesMode={this.toggleFavouritesMode}
          isFavouritesMode={this.isFavouritesMode()}
        />
        <ShibesContainer>
          {
            this.isFavouritesMode()
              ?
              this.renderShibesList(favouritesShibes)
              :
              <InfiniteScroll
                pageStart={0}
                loadMore={this.props.fetchShibes}
                hasMore={true}
                loader={<LoadMoreLoader isLoading={this.state.isLoading} />}
                threshold={50}
              >
                { this.renderShibesList(shibes) }
              </InfiniteScroll>
          }
        </ShibesContainer>
      </Container>
    );
  }
}
