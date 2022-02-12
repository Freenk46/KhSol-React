import { ProfileAPI } from "../API/API";
const SET_MY_PROFILE = 'SET_MY_PROFILE';
const SET_MYPROFILE_STATUS = 'SET_MYPROFILE_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
let initialState = {

   Profile: null,
   status: "xui",
}

const ProfileReducer = (state = initialState, action) => {

   switch (action.type) {
      case SET_MY_PROFILE: {
         return { ...state, Profile: action.Profile }
      }
      case SET_MYPROFILE_STATUS: {
         return { ...state, status: action.status }
      }
      case SAVE_PHOTO_SUCCESS: {
         return { ...state, Profile: { ...state.Profile, photos: action.photos } }
      }
      default:
         return state;
   }
}
export const setMyProfileStatus = (status) => ({ type: SET_MYPROFILE_STATUS, status })
export const setMyProfile = (Profile) => ({ type: SET_MY_PROFILE, Profile })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getMyProfileThunk = (userId) => async (dispatch) => {
   let response = await ProfileAPI.getProfile(userId)
   dispatch(setMyProfile(response.data));
}
export const getMyStatus = (userId) => async (dispatch) => {
   let response = await ProfileAPI.getStatus(userId)
   dispatch(setMyProfileStatus(response.data));
}
export const UpdateMyStatus = (status) => async (dispatch) => {
   let response = await ProfileAPI.UpdateStatus(status)
   if (response.data.resultCode === 0) {
      dispatch(setMyProfileStatus(status));
   }
}
export const SavePhoto = (file) => async (dispatch) => {
   let response = await ProfileAPI.SavePhoto(file)
   if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.photos));
   }
}
export default ProfileReducer;