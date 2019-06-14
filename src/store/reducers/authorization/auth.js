import * as authActions from './../../actions/actionTypes/authTypes'
const defaultState = {
    user: null,
    loading: true,
    error: null,
};


const signUpStart = (state, action) => {
    const newState = {user: null, error: null, loading: true};
    return newState;
};

const signUpFailed= (state, action) =>{
    const newState = {user: null, loading: false, error: action.err};
    return newState;
};

const signUpSuccess= (state, action) => {
    const newState = {user: action.data, loading: false, error: null};
    return newState;
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case authActions.SIGNUP_START:
            return signUpStart(state,action);
        case authActions.SIGNUP_FAILED:
            return signUpFailed(state,action);
        case authActions.SIGNUP_SUCCESS:
            return signUpSuccess(state,action);
        default: return state;
    }
};

export default reducer;