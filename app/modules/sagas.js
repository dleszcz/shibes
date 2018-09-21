import { all, fork } from 'redux-saga/effects';
import shibesSaga from './shibes/shibes.sagas';

//<-- IMPORT MODULE SAGA -->

export default function* rootSaga() {
  yield all([
    fork(shibesSaga),
    //<-- INJECT MODULE SAGA -->
  ]);
}
