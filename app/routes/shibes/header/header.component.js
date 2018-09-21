import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './header.messages';
import { Container, FavouritesLink } from './header.styles';

export class Header extends PureComponent {
  static propTypes = {
    areFavourties: PropTypes.bool,
    isFavouritesMode: PropTypes.bool,
    toggleFavouritesMode: PropTypes.func,
  };

  render() {
    return (
      <Container>
        <Link to="/">
          <FormattedMessage {...messages.title} />
        </Link>

        { this.props.areFavourties && !this.props.isFavouritesMode &&
          <FavouritesLink onClick={this.props.toggleFavouritesMode}>
            <FormattedMessage {...messages.showFavourites} />
          </FavouritesLink>
        }
      </Container>
    );
  }
}
