 import React from 'react';
import * as axios from  'axios';
import  s from './Users.module.css'
class Users extends React.Component{
        componentDidMount(){
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{
                        this.props.setUsers(response.data.items)
                        this.props.setUsersTotalCount(response.data.totalCount)
                });
        }
        onPageChanged =(pageNumber)=>{
                this.props.setCurrentPage(pageNumber);
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>{
                        this.props.setUsers(response.data.items)
                });
        }
      render() {

        let pagesCount =Math.ceil(this.props.totalUsersCount/ this.props.pageSize);
        let pages =[];
        for(let i=1; i <=pagesCount;i++){
                pages.push(i);
        }
      return <div>
              <div>
                     {pages.map(p=>{
                    return   <span className={this.props.currentPage === p  && s.selectedPage}
                    onClick={()=>{this.onPageChanged(p);}}> {p} </span>
                     })}
              </div>
        {    
    this.props.users.map(u=> <div key={u.id}>
            <span>
                    <div>
                            <img className={s.usersPhoto} src={u.photos.small!=null ?u.photos.small:"/img/11.jpg"}/>
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
}
export default Users;