import { authAPI } from "../API/API";
import { authAPI2 } from "../API/RestAPI";
import { getMyProfileThunk, getMyStatus } from "./Profile-reducer";

const SET_USERS_DATA = 'SET_USERS_DATA';
let initialState = {
   id: null,
   email: null,
   role: null,
   isAuth: false,
}
const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USERS_DATA: {
         debugger;
         return {
            ...state,
            ...action.data,
            isAuth: true,
         }
      }
      default: return state;
   }
}

export const SetAuthUserData = (id, email, role, isAuth) => ({ type: SET_USERS_DATA, data: { id, email, role, isAuth } })
export const getAuthUsersDataThunk = (id) => (dispatch) => {
   return authAPI.authMe().then(response => {
      if (response.data.resultCode === 0) {
         let { id, login, email } = response.data.data;
         dispatch(SetAuthUserData(id, email, login, true));
         dispatch(getMyProfileThunk(id));

      }
   });
}
export const login = (email, password) => async (dispatch) => {
   let response = await authAPI2.login(email, password,)
   debugger;
   if (response.status === 201) {
      debugger;
      localStorage.getItem('token', response.data.accessToken);
      dispatch(SetAuthUserData(response.data.user.id, response.data.user.email, response.data.user.roles, true));
   }
}
export const logout = () => (dispatch) => {
   authAPI.logout()
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(SetAuthUserData(null, null, null, false))
         }
      });
}
export default authReducer;