import React from "react";
import MyProcedureItem from "./MyProcedureItem";
import s from "./MyProcedure.module.css"
const MyProcedure = (props) => {
   debugger;
   let ProceduresData = props.MyProcedure.map((E) =>
      <MyProcedureItem id={E.id} ProcedureName={E.ProcedureName} ProcedureClass={E.ProcedureClass}
         Gender={E.Gender} Time={E.Time} When={E.When} Price={E.Price} />);
   return (

      <table className={s.table_wrapper}>
         <thead className={s.table_header}  >
            <tr>
               <td>id</td>
               <td>ProcedureName</td>
               <td>ProcedureClass</td>
               <td>When</td>
               <td>ProcedureTime</td>
               <td>Price</td>
               <td>Status</td>
            </tr>
         </thead>
         <tbody>
            {ProceduresData}
         </tbody>

      </table >

   )
}
export default MyProcedure;