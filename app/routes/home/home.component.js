import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ProgressiveImage from 'react-progressive-image';
import InfiniteScroll from 'react-infinite-scroller';

import { InitialLoader } from './initialLoader/initialLoader.component';
import { LoadMoreLoader } from './loadMoreLoader/loadMoreLoader.component';
import { Container, ShibeImagesList, ShibeItem, ShibeImage, FouvoriteIcon } from './home.styles';

const placeholderImage = require('images/placeholder.jpg');

export class Home extends PureComponent {
  static propTypes = {
    shibes: PropTypes.object,
    fetchShibes: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    addToFavourites: PropTypes.func,
    favouritesShibes: PropTypes.object,
  };

  state = {
    isLoading: true,
  };

  componentDidMount() {
    this.props.fetchShibes();
  }

  componentDidUpdate({ isLoading }) {
    if (isLoading !== this.props.isLoading) {
      this.setState({
        isLoading: this.props.isLoading
      });
    }
  }

  addToFavourites = (shibeImage) => {
    this.props.addToFavourites(shibeImage);
  }

  isAddedToFavourites = () => {
    console.log('comp', this.props.favouritesShibes)
  }

  render() {
    const { shibes } = this.props;

    if (this.state.isLoading && !shibes.size) {
      return (
        <InitialLoader backgroundImage={`${placeholderImage}`}>loading...</InitialLoader>
      );
    }

    return (
      <Container>
        <Helmet title="Homepage" />

        <InfiniteScroll
          pageStart={0}
          loadMore={this.props.fetchShibes}
          hasMore={true}
          loader={<LoadMoreLoader isLoading={this.state.isLoading} />}
          threshold={10}
        >
          <ShibeImagesList>
            { shibes && shibes.toArray()
              .map(
                (shibeImage, index) => 
                  <ShibeItem key={index}>
                    <ProgressiveImage src={shibeImage} placeholder={placeholderImage}>
                      {(src, loading) => (<ShibeImage style={{ opacity: loading ? 0.25 : 1 }} src={src} alt={'Shibe'} />)}
                    </ProgressiveImage>

                    <FouvoriteIcon onClick={() => this.addToFavourites(shibeImage)} />
                  </ShibeItem>
              )
            }
          </ShibeImagesList>
        </InfiniteScroll>
      </Container>
    );
  }
}
