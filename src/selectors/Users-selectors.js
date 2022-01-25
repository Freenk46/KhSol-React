import { createSelector } from "reselect";
const getUserSelector = (state) => {
   return state.Usersreducer.users;
}
export const getUsers = createSelector(getUserSelector, (users) => {
   return users.filter(u => true);
})
export const getPageSize = (state) => {
   return state.Usersreducer.pageSize;
}
export const getTotalUsersCount = (state) => {
   return state.Usersreducer.totalUsersCount;
}
export const getCurrentPage = (state) => {
   return state.Usersreducer.currentPage;
}
export const getIsFetching = (state) => {
   return state.Usersreducer.isFetching;
}
export const getServerInProgres = (state) => {
   return state.Usersreducer.getServerInProgres;
}
