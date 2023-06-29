import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from '../../constants/AuthReduxConstant';

// defaul state
const initialState = {
    user: null,
    isLogin: false
}

const authReducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_USER:
            return {
                user: payload,
                isLogin: true
            }
        case REGISTER_USER:
            return {
                user: payload,
                isLogin: true
            }
        case LOGOUT_USER:
            return {
                user: null,
                isLogin: false
            }
        default:
            return state;
    }
};

export default authReducer;