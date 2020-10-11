

export const AppActions = {
  Login: 'login', 
  Logout: 'logout', 
  Register: 'register' 
}

export const AppReducer = (state, action) => {
  switch (action.type) {
    case AppActions.Login: 
      // TODO:  
      return {...state}
    case AppActions.Logout:
      // TODO 
      return {...state} 
    case AppActions.Register:
      // TODO 
      return {...state}
    default:
      return state;
  }
};

export default AppReducer;
