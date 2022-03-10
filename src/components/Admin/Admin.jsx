import React from 'react';
import s from './Admin.module.css'
import AddClass from './AdminITem/addClass';
import AddProcedure from './AdminITem/addProcedureform';
import AddType from './AdminITem/addType';
const Admin = (props) => {

   return (
      <div className={s.admin_warpper}>
         <div className={s.Procedure_conteiner}>
            <h1 className={s.Procedure_title}> პროცედურის დამატება</h1>
            <AddProcedure class={props.class} types={props.types} />
            <h1 className={s.Procedure_title}> კატეგორიის დამატება</h1>
            <AddClass />
            <h1 className={s.Procedure_title}> ტიპის დამატება</h1>
            <AddType />
         </div>
      </div>
   );
}
export default Admin;