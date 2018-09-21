import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './initialLoader.messages';
import { Loader } from './initialLoader.styles';

export class InitialLoader extends PureComponent {
  static propTypes = {
    backgroundImage: PropTypes.string,
  };

  render() {
    return (
      <Loader style={{ backgroundImage: `url(${this.props.backgroundImage})` }}>
        <FormattedMessage {...messages.title} />
      </Loader>
    );
  }
}
