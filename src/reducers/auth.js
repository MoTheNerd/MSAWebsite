import { REDUX_ROUTES as rr } from "../Constants"

export default function auth(state = [], action) {
	switch (action.type) {
		case rr.AUTH.SIGN_IN_REQUEST:
			return {
				...state,
				isLoading: true,
				status: "UNAUTHORIZED"
			}
		case rr.AUTH.SIGN_IN_SUCCESS:
			return {
				...state,
				isLoading: false,
				...action.payload.data,
				status: "AUTHORIZED"
			}
		case rr.AUTH.SIGN_IN_FAILURE:
			return {
				...state,
				isLoading: false,
				status: "UNAUTHORIZED"
			}
		case rr.AUTH.CREATE_REQUEST:
			return {
				...state,
				isLoading: true,
				status: "UNAUTHORIZED"
			}
		case rr.AUTH.CREATE_SUCCESS:
			return {
				...state,
				isLoading: false,
				...action.payload.data,
				status: "AUTHORIZED"
			}
		case rr.AUTH.CREATE_FAILURE:
			return {
				...state,
				isLoading: false,
				status: "UNAUTHORIZED"
			}
		case rr.AUTH.SIGN_OUT_REQUEST:
			return {
				...state,
				isLoading: true,
			}
		case rr.AUTH.SIGN_OUT_SUCCESS:
			return {
				isLoading: false,
				status: "UNAUTHORIZED"
			}
		case rr.AUTH.UPDATE_REQUEST:
			return {
				...state,
				isLoading: true,
			}
		case rr.AUTH.UPDATE_SUCCESS:
			return {
				...state,
				isLoading: false,
				...action.payload.data,
			}
		case rr.AUTH.UPDATE_FAILURE:
			return {
				...state,
				isLoading: false,
			}
		default:
			return state
	}
}