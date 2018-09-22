import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import InfiniteScroll from 'react-infinite-scroller';

import { Header } from './header/header.component';
import { ShibesList } from './shibesList/shibesList.component';
import { InitialLoader } from './initialLoader/initialLoader.component';
import { LoadMoreLoader } from './loadMoreLoader/loadMoreLoader.component';
import { Container, ShibesContainer } from './shibes.styles';

const placeholderImage = require('./../../images/placeholder.jpg');

export class Shibes extends PureComponent {
  static propTypes = {
    shibes: PropTypes.object,
    fetchShibes: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    addToFavourites: PropTypes.func,
    removeFromFavourites: PropTypes.func,
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
    if (isLoading !== this.props.isLoading) {
      this.setState({
        isLoading: this.props.isLoading,
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

  addToFavourites = (shibeImage) => this.props.addToFavourites(shibeImage);

  removeFromFavourites = (shibeImage) => this.props.removeFromFavourites(shibeImage);
  
  isAddedToFavourites = (shibeImage) => this.props.favouritesShibes.find(image => image === shibeImage);

  renderShibesList = (items) => {
    if (items) {
      return (
        <ShibesList
          items={items}
          placeholderImage={placeholderImage}
          addToFavourites={this.addToFavourites}
          removeFromFavourites={this.removeFromFavourites}
          isAddedToFavourites={this.isAddedToFavourites}
        />
      );
    }
  };

  render() {
    const { shibes, favouritesShibes, fetchShibes } = this.props;
    const { isLoading, isFavouritesMode } = this.state;

    if (isLoading && !shibes.size) {
      return (
        <InitialLoader backgroundImage={`${placeholderImage}`}>loading...</InitialLoader>
      );
    }

    return (
      <Container>
        <Helmet title="Homepage" />
        <Header
          areFavourties={!!favouritesShibes.size} 
          toggleFavouritesMode={this.toggleFavouritesMode}
          isFavouritesMode={isFavouritesMode}
        />
        <ShibesContainer>
          {
            isFavouritesMode
              ?
              this.renderShibesList(favouritesShibes)
              :
              <InfiniteScroll
                loadMore={fetchShibes} loader={<LoadMoreLoader isLoading={isLoading} />} threshold={50} hasMore
              >
                { this.renderShibesList(shibes) }
              </InfiniteScroll>
          }
        </ShibesContainer>
      </Container>
    );
  }
}
