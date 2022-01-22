import React from "react";
import CartProcedureItem from "./CartProcedureItem";
import s from "./CartProcedure.module.css"
const CartProcedure = (props) => {
   let ProceduresData = props.NewProcedure.map((E) =>
      <CartProcedureItem id={E.id} ProcedureName={E.ProcedureName} ProcedureClass={E.ProcedureClass}
         ChangeNewId={props.ChangeNewId}
         DelNewProcedureCart={props.DelNewProcedureCart}
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
               <td>Edit</td>
            </tr>
         </thead>
         <tbody>
            {ProceduresData}
         </tbody>

      </table >

   )
}
export default CartProcedure;