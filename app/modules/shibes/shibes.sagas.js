import { put, takeLatest } from 'redux-saga/effects';
import reportError from 'report-error';

import api from '../../services/api';
import { ShibesTypes, ShibesActions } from './shibes.redux';

export function* fetchShibes() {
  try {
    const { data } = yield api.get('shibes?count=16');

    return yield put(ShibesActions.fetchSuccess(data));
  } catch (e) {
    if (e.response) {
      return yield put(ShibesActions.fetchError(e.response.data));
    }

    return yield reportError(e);
  }
}

export default function* shibesSaga() {
  yield takeLatest(ShibesTypes.FETCH, fetchShibes);
}
