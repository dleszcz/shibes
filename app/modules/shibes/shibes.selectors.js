import { createSelector } from 'reselect';


const selectShibesDomain = state => state.get('shibes');

export const selectShibesItems = createSelector(
  selectShibesDomain, state => state.get('items')
);

export const selectShibesLoadingStatus = createSelector(
  selectShibesDomain, state => state.get('isLoading')
);

export const selectFavouritesShibesItems = createSelector(
  selectShibesDomain, state => {
    console.log(state.toJS())
    return state.get('favouritesItems')
  }
);
