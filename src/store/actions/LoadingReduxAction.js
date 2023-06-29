import { LOADING_APP } from '../constants/LoadingReduxConstant';

export const setLoading = (isLoading) => {
    return {
        type: LOADING_APP,
        payload: isLoading
    }
};