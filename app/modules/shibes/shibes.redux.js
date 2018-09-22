import { createActions, createReducer } from 'reduxsauce';
import { Record, List, fromJS } from 'immutable';

export const { Types: ShibesTypes, Creators: ShibesActions } = createActions({
  fetch: [],
  fetchSuccess: ['data'],
  fetchError: ['payload'],
  addToFavourites: ['image'],
  removeFromFavourites: ['image'],
}, { prefix: 'SHIBES_' });

const ShibesRecord = new Record({
  items: List(),
  isLoading: true,
  favouritesItems: List(),
});

export const INITIAL_STATE = new ShibesRecord({});

const getSuccessHandler = (state = INITIAL_STATE, action) =>
  state
    .set('items', state.get('items').concat(fromJS(action.data)))
    .set('isLoading', false);

const setLoadingStatus = (state = INITIAL_STATE) =>
  state.set('isLoading', true);

const addToFavourites = (state = INITIAL_STATE, action) =>
  state.set('favouritesItems', state.get('favouritesItems').concat(fromJS(action.image)));

const removeFromFavourites = (state = INITIAL_STATE, action) => 
  state.set('favouritesItems', state.get('favouritesItems').filter(el => el !== action.image));

export const reducer = createReducer(INITIAL_STATE, {
  [ShibesTypes.FETCH_SUCCESS]: getSuccessHandler,
  [ShibesTypes.FETCH]: setLoadingStatus,
  [ShibesTypes.ADD_TO_FAVOURITES]: addToFavourites,
  [ShibesTypes.REMOVE_FROM_FAVOURITES]: removeFromFavourites,
});
