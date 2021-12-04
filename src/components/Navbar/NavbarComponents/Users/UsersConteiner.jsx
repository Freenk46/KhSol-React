import react from 'react';
import Users from "./Users";
import { connect } from 'react-redux'
import { setUsersAC } from '../../../../redux/Users-reducer';
import { setCurrentPageAC } from '../../../../redux/Users-reducer';
import { setUsersTotalCountAC } from '../../../../redux/Users-reducer';
 let  mapSteatToProps =(state)=>{
     return{
         users:state.Usersreducer.users,
         pageSize:state.Usersreducer.pageSize,
         totalUsersCount:state.Usersreducer.totalUsersCount,
         currentPage:state.Usersreducer.currentPage,
     }
 }
 let mapDispatchToProps =(dispatch)=>{
     return{
     setUsers: (users)=>{
         dispatch(setUsersAC(users));

     },
     setCurrentPage:(currentPage)=>{
        dispatch(setCurrentPageAC(currentPage));

    },
    setUsersTotalCount:(totalCount)=>{
        dispatch(setUsersTotalCountAC(totalCount));

    }
 }
 }
export default connect(mapSteatToProps,mapDispatchToProps)(Users) ; 