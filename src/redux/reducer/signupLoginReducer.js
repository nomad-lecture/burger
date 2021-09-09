const initialState = {
  saving: false,
  finished: false,
  firebaseError: "",
  token: null,
  userId: null,
  logginIn: false,
  firebaseErrorCode: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_USER_START":
      return {
        ...state,
        saving: true,
      };
    case "SIGNUP_USER_SUCCESS":
      return {
        ...state,
        saving: false,
        finished: true,
        token: action.data.idToken,
        userId: action.data.localId,
      };
    case "SIGNUP_USER_ERROR":
      return {
        ...state,
        login: false,
        finsihed: true,
        firebaseError: action.error.response.data.error.message,
      };

    case "LOGIN_USER_START":
      return {
        ...state,
        logginIn: true,
      };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        logginIn: false,
        token: action.data.idToken,
        userId: action.data.localId,
      };
    case "LOGIN_USER_ERROR":
      return {
        ...state,
        logginIn: false,
        firebaseError: action.error.response.data.error.message,
        firebaseErrorCode: action.error.response.data.error.code,
      };
    case "LOGOUT":
      return {
        ...state,
        token: null,
        userId: null,
        firebaseError: null,
        firebaseErrorCode: null,
      };
    default:
      return state;
  }
};

export default reducer;
