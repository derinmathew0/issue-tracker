import { put, call } from 'redux-saga/effects';
import { zipcodeDetailsService } from '../services/zipcodeDetailsService';

import * as types from '../actions'

export function* getZipcodeDetailsSaga(payload) {
  try {
    const response = yield call(zipcodeDetailsService, payload);
    yield [
      put({ type: types.GET_ZIPCODE_DETAILS_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.GET_ZIPCODE_DETAILS_ERROR, error })
  }
}