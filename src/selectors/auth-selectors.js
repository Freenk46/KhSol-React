export const getid = (state) => {
   return state.authReducer.id;
}
export const getemail = (state) => {
   return state.authReducer.email;
}
export const getlogin = (state) => {
   return state.authReducer.login;
}
export const getisAuth = (state) => {
   return state.authReducer.isAuth;
}
