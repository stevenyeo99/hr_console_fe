import { LOGIN_USER, REGISTER_USER, LOGOUT_USER } from '../constants/AuthReduxConstant';

const loginUser = (user) => {
    return {
        type: LOGIN_USER,
        payload: user
    };
};

const registerUser = (user) => {

};

const logoutUser = (userId) => {

}

export {
    loginUser,
    registerUser,
    logoutUser
};