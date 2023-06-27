import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from '../../constants/AuthReduxConstant';

// defaul state
const initialState = {
    user: null,
    isLogin: false
}

const authReduxReducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_USER:
            break;
        case REGISTER_USER:
            break;
        case LOGOUT_USER:
            break;
        default:
            break;
    }
};

export default authReduxReducer;