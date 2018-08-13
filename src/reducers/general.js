import { REDUX_ROUTES as rr } from "../Constants"

export default function general(state = [], action) {
	switch (action.type) {
		case rr.GENERAL.PRAYERS_FETCH_REQUEST:
			return {
				...state,
				isLoading: true,
			}
		case rr.GENERAL.PRAYERS_FETCH_SUCCESS:
			return {
				...state,
				isLoading: false,
				prayerTimes: { ...action.payload[0], _id: undefined }
			}
		case rr.GENERAL.PRAYERS_FETCH_FAILURE:
			return {
				...state,
				isLoading: false,
			}
		case rr.GENERAL.PRAYERS_SET_REQUEST:
			return {
				...state,
				isLoading: true,
			}
		case rr.GENERAL.PRAYERS_SET_SUCCESS:
			return {
				...state,
				isLoading: false,
				prayerTimes: { ...action.payload.data, _id: undefined }
			}
		case rr.GENERAL.PRAYERS_SET_FAILURE:
			return {
				...state,
				isLoading: false,
			}
		default:
			return state
	}
}