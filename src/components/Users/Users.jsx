import React from "react";
import { NavLink } from "react-router-dom";
import s from './Users.module.css';
let Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }
   return <div>
      <div>
         {pages.map(p => {
            return <span className={props.currentPage === p && s.selectedPage}
               onClick={() => { props.onPageChanged(p); }}> {p} </span>
         })}
      </div>
      {
         props.users.map(u => <div key={u.id}>
            <span>
               <div>
                  <NavLink to={'/profile/' + u.id}>
                     <img className={s.usersPhoto} alt="xui" src={u.photos.small != null ? u.photos.small : "https://i.pinimg.com/originals/1b/f2/b8/1bf2b80b8d29d938deafddb4c393a653.jpg"} />
                  </NavLink>
               </div>
               <div>
                  {u.Gender}
               </div>
            </span>
            <span>
               <span>
                  <div>{u.name}</div>
                  <div>{u.Surname}</div>
                  <div>{u.Number}</div>
               </span>
               <span>
                  <div>'u.Location.country'</div>
                  <div>'u.Location.city'</div>
                  <div>'u.Email' </div>
               </span>
            </span>
         </div>)
      }
   </div>


}

export default Users;