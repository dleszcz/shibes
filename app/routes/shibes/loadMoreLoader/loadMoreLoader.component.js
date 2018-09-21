import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './loadMoreLoader.messages';
import { Loader } from './loadMoreLoader.styles';

export class LoadMoreLoader extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };

  render() {
    if (!this.props.isLoading) {
      return null;
    }

    return (
      <Loader>
        <FormattedMessage {...messages.title} />
      </Loader>
    );
  }
}
