import { takeLatest } from 'redux-saga/effects';
import { getZipcodeDetailsSaga } from './zipcodeDetailsSaga';
import * as types from '../actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.GET_ZIPCODE_DETAILS, getZipcodeDetailsSaga);
  
}