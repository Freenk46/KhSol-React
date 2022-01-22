import { userAPI } from "../API/API";
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
let initialState = {

   Profile: null
}

const ProfileReducer = (state = initialState, action) => {

   switch (action.type) {
      case SET_USERS_PROFILE: {
         return { ...state, Profile: action.Profile }
      }
      default:
         return state;
   }
}
export const setUsersProfile = (Profile) => ({ type: SET_USERS_PROFILE, Profile })


export const getUsersProfileThunk = (userId) => (dispatch) => {
   userAPI.getProfile(userId).then(response => {
      dispatch(setUsersProfile(response.data));
   });
}
export default ProfileReducer;