const SET_USERS='SET_USERS';
const SET_CURRENT_PAGE='SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT='SET_USERS_TOTAL_COUNT';
 let initialState={
      users  : [ ] ,
      pageSize: 100,
      totalUsersCount: 0,
      currentPage:3,
    
      }
const UseReducer =(state=initialState,action)=>{
 switch(action.type){
     case  SET_USERS:{
                return{...state,users:action.users}
        }
      case  SET_CURRENT_PAGE:{
          return{...state,currentPage:action.currentPage}
  }
  case  SET_USERS_TOTAL_COUNT:{
    return{...state,totalUsersCount:action.totalCount}
}
    default:
      return state;
 }
}
 export const setUsersAC=(users)=>({type:SET_USERS ,users}  )
 export const setCurrentPageAC=(currentPage)=>({type:SET_CURRENT_PAGE ,currentPage}  )
 export const setUsersTotalCountAC=(totalCount)=>({type:SET_USERS_TOTAL_COUNT , totalCount}  )
export default UseReducer;