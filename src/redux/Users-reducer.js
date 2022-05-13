import { AdminAPI, basketAPI } from "../API/RestAPI";

const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_PROGRES = 'TOGGLE_IS_PROGRES';
const SET_USER = 'SET_USER';
const SET_ROLES = 'SET_ROLES';
const SET_BASKET = 'SET_BASKET';
let initialState = {
  Basket: [],
  Roles: null,
  User: null,
  users: [],
  pageSize: 3,
  totalUsersCount: 0,
  currentPage: 1,
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
    case SET_USER: {
      return { ...state, User: action.user }
    }
    case SET_BASKET: {
      return { ...state, Basket: action.Basket }
    }
    case SET_ROLES: {
      return { ...state, Roles: action.roles }
    }
    default:
      return state;
  }
}
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setBasket = (Basket) => ({ type: SET_BASKET, Basket })
export const setRoles = (roles) => ({ type: SET_ROLES, roles })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (totalCount) => ({ type: SET_USERS_TOTAL_COUNT, totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggServerInProgres = (isFetching) => ({ type: TOGGLE_IS_PROGRES, isFetching })

export const setUser = (user) => ({ type: SET_USER, user })

export const getUsersThunkCreater = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let response = await AdminAPI.getAllUsers(currentPage, pageSize)
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.data.rows));
    dispatch(setUsersTotalCount(response.data.count));
  }
}
export const getUserThunk = (userId) => async (dispatch) => {
  let response = await AdminAPI.getUser(userId)
  dispatch(setUser(response.data));
}
export const getAllUserRoles = () => async (dispatch) => {
  const response = await AdminAPI.getAllRoles()
  dispatch(setRoles(response.data));
}
export const UserBan = (BanReason, userId) => async (dispatch) => {
  await AdminAPI.userBan(BanReason, userId)
  dispatch(getUserThunk(userId));
}
export const addUserRole = (value, userId) => async (dispatch) => {
  await AdminAPI.AddUserRole(value, userId)
  dispatch(getUserThunk(userId));
}
export const getUserBasket = (basketId) => async (dispatch) => {
  const response = await basketAPI.getBasket(basketId)
  dispatch(setBasket(response.data));

}

export default UseReducer;