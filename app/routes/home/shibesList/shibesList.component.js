import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './shibesList.messages';
import { Container, Title, List, ListItem } from './shibesList.styles';

export class ShibesList extends PureComponent {
  static propTypes = {
    items: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Container>
        <Title>
          <FormattedMessage {...messages.title} />
        </Title>
      </Container>
    );
  }
}
