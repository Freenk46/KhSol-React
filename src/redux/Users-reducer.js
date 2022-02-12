import { userAPI, ProfileAPI } from "../API/API";

const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_PROGRES = 'TOGGLE_IS_PROGRES';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
let initialState = {
  Profile: null,
  users: [],
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 3,
  isFetching: false,
  getServerInProgres: false,

}
const UseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_USERS_TOTAL_COUNT: {
      return { ...state, totalUsersCount: action.totalCount }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case TOGGLE_IS_PROGRES: {
      return { ...state, getServerInProgres: action.isFetching }
    }
    case SET_USERS_PROFILE: {
      return { ...state, Profile: action.Profile }
    }
    default:
      return state;
  }
}
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (totalCount) => ({ type: SET_USERS_TOTAL_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggServerInProgres = (isFetching) => ({ type: TOGGLE_IS_PROGRES, isFetching })

export const setUsersProfile = (Profile) => ({ type: SET_USERS_PROFILE, Profile })

export const getUsersThunkCreater = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let data = await userAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setUsersTotalCount(data.totalCount));
  }
}
export const getUsersProfileThunk = (userId) => async (dispatch) => {
  let response = await ProfileAPI.getProfile(userId)
  dispatch(setUsersProfile(response.data));
}
export default UseReducer;