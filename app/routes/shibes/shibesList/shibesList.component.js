import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgressiveImage from 'react-progressive-image';

import { ShibeImagesList, ShibeItem, ShibeImage, FavouriteIcon } from './shibesList.styles';

export class ShibesList extends Component {
  static propTypes = {
    items: PropTypes.object.isRequired,
    placeholderImage: PropTypes.string,
    addToFavourites: PropTypes.func,
    removeFromFavourites: PropTypes.func,
    isAddedToFavourites: PropTypes.func,
  };

  onClickHandler = (shibeImage) => {
    if (this.props.isAddedToFavourites(shibeImage)) {
      this.props.removeFromFavourites(shibeImage);
    } else {
      this.props.addToFavourites(shibeImage);
    }
  };

  render() {
    const { items, placeholderImage, isAddedToFavourites } = this.props;

    return (
      <ShibeImagesList>
        {
          items.toArray()
            .map(
              (shibeImage, index) =>
                <ShibeItem key={index}>
                  <ProgressiveImage src={shibeImage} placeholder={placeholderImage}>
                    {(src, loading) => (<ShibeImage style={{ opacity: loading ? 0.25 : 1 }} src={src} alt={'Shibe'} />)}
                  </ProgressiveImage>
                  <FavouriteIcon
                    onClick={() => this.onClickHandler(shibeImage)}
                    isFavourited={isAddedToFavourites(shibeImage)}
                  />
                </ShibeItem>
            )
        }
      </ShibeImagesList>
    );
  }
}
