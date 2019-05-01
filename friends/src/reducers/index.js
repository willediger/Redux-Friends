import * as AT from "../actions/actionTypes";

const initialState = {
  error: "",
  errorStatusCode: null,
  fetchingData: false,
  friends: [],
  isLoggingIn: false,
  loginError: "",
  addingData: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.LOGIN_START: {
      return {
        ...state,
        loginError: "",
        isLoggingIn: true
      };
    }
    case AT.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggingIn: false
      };
    }
    case AT.LOGIN_FAILURE: {
      return {
        ...state,
        loginError: "failed login",
        isLoggingIn: false
      };
    }
    case AT.FETCH_DATA_START:
      return {
        ...state,
        error: "",
        fetchingData: true
      };
    case AT.FETCH_DATA_SUCCESS || AT.ADDING_DATA_SUCCESS:
      return {
        ...state,
        error: "",
        fetchingData: false,
        addingData: false,
        friends: action.payload
      };
    case AT.FETCH_DATA_FAILURE:
      return {
        ...state,
        errorStatusCode: action.payload.status
      };
    default:
      return state;
  }
};

export default reducer;
