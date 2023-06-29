import { LOADING_APP } from '../../constants/LoadingReduxConstant';

const initialState = {
    isLoading: false
};

const LoadingReducer = (state = initialState, action = {}) => {
    const { type, payload } = state;
    
    switch (type) {
        case LOADING_APP:
            return {...state, isLoading: payload};
        default:
            return state;
    }
}

export default LoadingReducer;