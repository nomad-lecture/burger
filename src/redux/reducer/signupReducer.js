const initialState = {
  saving: false,
  finished: false,
  firebaseError: "",
  token: null,
  userId: null,
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
        saving: false,
        finsihed: true,
        firebaseError: action.error.response.data.error.message,
      };

    default:
      return state;
  }
};

export default reducer;
