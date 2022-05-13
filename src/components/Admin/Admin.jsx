import React, { useState } from "react";
import UsersConteiner from "../Users/UsersConteiner";
import s from './Admin.module.css'
import AddClass from './AdminITem/addClass';
import AddProcedure from './AdminITem/addProcedureform';
import AddRole from "./AdminITem/addRole";
import AddType from './AdminITem/addType';
import UpdateClass from './AdminITem/updateClass';
import UpdateType from './AdminITem/updateType';

const Admin = (props) => {
   let [Procedure, setProcedure] = useState(true)
   let [Class, setClass] = useState(false)
   let [Type, setType] = useState(false)
   let [User, setUser] = useState(false)
   let [Role, setRole] = useState(false)

   let reset = () => {
      setProcedure(false);
      setClass(false);
      setType(false);
      setUser(false);
      setRole(false);
   }

   let showProcedure = () => { reset(); setProcedure(true); }
   let showClass = () => { reset(); setClass(true); }
   let showWaType = () => { reset(); setType(true); }
   let showUser = () => { reset(); setUser(true); }
   let showRole = () => { reset(); setRole(true); }

   return <div className={s.admin_warpper}>
      <div className={s.Menu_conteiner}>
         <div className={s.Menu_list}>
            <span className={s.Menu_list_item} onClick={showProcedure}>პროცედურა</span>
            <span className={s.Menu_list_item} onClick={showClass}>კატეგორია </span>
            <span className={s.Menu_list_item} onClick={showWaType}>ტიპი </span>
            <span className={s.Menu_list_item} onClick={showUser}>მომხმარებელი </span>
            <span className={s.Menu_list_item} onClick={showRole}>როლი </span>
         </div>
      </div>

      <div >
         {Procedure && <div className={s.conteiner}>
            <AddProcedure class={props.class} types={props.types} />
            <div>
               <h2> სია</h2>
               <ul>
                  {props.procedures.map((e) => (<li >{e.name}</li>))}
               </ul>
            </div>
            <div>

            </div>
         </div   >}
         {Class && <div className={s.conteiner}>
            <AddClass />
            <div>
               <h2> სია</h2>
               <ul>
                  {props.class.map((K) => (<li >{K.name}</li>))}
               </ul>
            </div>
            <UpdateClass />
         </div>}
         {Type && <div className={s.conteiner}>
            <AddType />
            <div>
               <h2> სია</h2>
               <ul className={s.list_conteiner}>
                  {props.types.map((i) => (<li >{i.name}</li>))}
               </ul>
            </div>
            <UpdateType />
         </div>}
         {User && <div className={s.conteiner}>
            <UsersConteiner />
         </div>}
         {Role && <div className={s.conteiner}>
            <AddRole />
            <div>
               <h2> სია</h2>
               <ul>

               </ul>
            </div>
            <div>

            </div>
         </div>}
      </div>
   </div>
}
export default Admin;