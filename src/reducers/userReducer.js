import { USER_REAUTH_SUCCESS, REMOVE_USER } from '../actions/types';

export function user(state = {}, action) {

    switch (action.type) {
        case USER_REAUTH_SUCCESS :
            let user = action.user
            return user;
        case REMOVE_USER :
            localStorage.removeItem('token')
            return {};
        default:
            return state;
    }
}