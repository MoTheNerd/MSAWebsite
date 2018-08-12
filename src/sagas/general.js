import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { REDUX_ROUTES as rr, NETWORKING as n } from '../Constants'
import { GENERAL as g } from './apiCalls'

//sometimes you can have action.payload
function* _getPrayerTimes() {
    for (let i = 0; i < n.MAX_RETRIES; i++) {
        try {
            // const response = yield call(api.getGarage);
            const response = yield call(g.getPrayerTimes)
            yield put({ type: rr.GENERAL.PRAYERS_FETCH_SUCCESS, payload: response });
            break;
        } catch (err) {
            console.error(err);
            console.log('_garage retry #' + (i + 1) + '. Next retry will happen after ' + n.WAIT_TIME + ' milliseconds.');
            if (i < n.MAX_RETRIES - 1) {
                yield call(delay, n.WAIT_TIME);
            }
            else {
                yield put({ type: rr.GENERAL.PRAYERS_FETCH_FAILURE });
            }
        }
    }
}

function* _setPrayerTimes(action) {
    for (let i = 0; i < n.MAX_RETRIES; i++) {
        try {
            const response = yield call(g.setPrayerTimes, action.payload)
            if (response.success === false) throw response
            else yield put({ type: rr.GENERAL.PRAYERS_SET_SUCCESS, payload: response });
            break;
        } catch (err) {
            console.error(err);
            console.log('_garage retry #' + (i + 1) + '. Next retry will happen after ' + n.WAIT_TIME + ' milliseconds.');
            if (i < n.MAX_RETRIES - 1) {
                yield call(delay, n.WAIT_TIME);
            }
            else {
                yield put({ type: rr.GENERAL.PRAYERS_SET_FAILURE });
            }
        }
    }
}

export default [
    takeLatest(rr.GENERAL.PRAYERS_FETCH_REQUEST, _getPrayerTimes),
    takeLatest(rr.GENERAL.PRAYERS_SET_REQUEST, _setPrayerTimes),
]