import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from '../constants/AuthReduxConstant';

const loginUser = (user) => {
    return {
        type: LOGIN_USER,
        payload: user
    };
};

const registerUser = (user) => {
    return {
        type: REGISTER_USER,
        payload: user,
    }
};

const logoutUser = (userId) => {
    return {
        type: LOGIN_USER
    }
}

export {
    loginUser,
    registerUser,
    logoutUser
};