import { combineReducers } from 'redux-immutable';

import { reducer as routerReducer } from './router/router.redux';
import { reducer as localesReducer } from './locales/locales.redux';
import { reducer as shibesReducer } from './shibes/shibes.redux';

//<-- IMPORT MODULE REDUCER -->

export default function createReducer() {
  return combineReducers({
    route: routerReducer,
    locales: localesReducer,
    shibes: shibesReducer,
    //<-- INJECT MODULE REDUCER -->
  });
}
