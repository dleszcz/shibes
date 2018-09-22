import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';
import { compose } from 'ramda';

import { Shibes } from './shibes.component';
import { ShibesActions } from '../../modules/shibes/shibes.redux';

import { selectShibesItems, selectShibesLoadingStatus, selectFavouritesShibesItems }
  from '../../modules/shibes/shibes.selectors';

import { LocalesActions } from '../../modules/locales/locales.redux';
import { selectLocalesLanguage } from '../../modules/locales/locales.selectors';


const mapStateToProps = createStructuredSelector({
  language: selectLocalesLanguage,
  shibes: selectShibesItems,
  isLoading: selectShibesLoadingStatus,
  favouritesShibes: selectFavouritesShibesItems,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchShibes: ShibesActions.fetch,
  setLanguage: LocalesActions.setLanguage,
  addToFavourites: ShibesActions.addToFavourites,
  removeFromFavourites: ShibesActions.removeFromFavourites,
}, dispatch);

export default compose(
  hot(module),
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Shibes);
