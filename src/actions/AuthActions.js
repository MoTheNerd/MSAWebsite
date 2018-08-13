import { REDUX_ROUTES as rr } from '../Constants';

export function signIn(userInfo) {
    return {
        type: rr.AUTH.SIGN_IN_REQUEST,
        payload: userInfo
    }
}

export function signUp(userInfo) {
    return {
        type: rr.AUTH.CREATE_REQUEST,
        payload: userInfo
    }
}

export function signOut() {
    return {
        type: rr.AUTH.SIGN_OUT_REQUEST
    }
}