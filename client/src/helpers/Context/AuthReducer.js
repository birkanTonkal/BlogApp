const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                account: action.payload,
                error: false,
            };
        case "LOGIN_FAILURE":
            return {
                account: null,
                error: true,
            };
        case "LOGOUT":
            return {
                account: null,
                error: false,
            };
        default:
            return state;
    }
  };
  
  export default AuthReducer;