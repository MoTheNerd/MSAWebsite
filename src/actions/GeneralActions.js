import { REDUX_ROUTES as rr } from '../Constants';

export function getPrayerTimes() {
    return {
        type: rr.GENERAL.PRAYERS_FETCH_REQUEST
    }
}

export function setPrayerTimes(data) {
    return {
        type: rr.GENERAL.PRAYERS_SET_REQUEST,
        payload: data
    }
}