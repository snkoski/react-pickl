import { USER_REAUTH, USER_REAUTH_SUCCESS, REMOVE_USER } from '../actions/types';

export function user(state = {}, action) {
    console.log("IN REDUCER")

    switch (action.type) {
        case USER_REAUTH_SUCCESS :
            let user = action.user
            console.log("IN REDUCER")
            return user;
        case REMOVE_USER :
            localStorage.removeItem('token')
            return {};
        default:
            return state;
    }
}