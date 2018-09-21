import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import ProgressiveImage from 'react-progressive-image';

import messages from './shibesList.messages';
import { ShibeImagesList, ShibeItem, ShibeImage, FavouriteIcon } from './shibesList.styles';

export class ShibesList extends PureComponent {
  static propTypes = {
    items: PropTypes.object.isRequired,
    placeholderImage: PropTypes.string,
    addToFavourites: PropTypes.func,
    isAddedToFavourites: PropTypes.func,
  };

  render() {
    const { items, placeholderImage, addToFavourites, isAddedToFavourites } = this.props;

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
                  <FavouriteIcon onClick={() => addToFavourites(shibeImage)} isFavourited={isAddedToFavourites(shibeImage)} />
                </ShibeItem>
            )
        }
      </ShibeImagesList>
    );
  }
}
