import React from "react";
import CartProcedureItem from "./CartProcedureItem";
import s from "./CartProcedure.module.css"
const CartProcedure = (props) => {
   let ProceduresData = props.CartProcedure.map((E) =>
      <CartProcedureItem id={E.id} ProcedureName={E.ProcedureName} ProcedureClass={E.ProcedureClass}
         ClassId={E.ClassId}
         GenderId={E.GenderId}
         ProcedureId={E.ProcedureId}
         LaserIsBooked={props.LaserIsBooked}
         TreatmentIsBooked={props.TreatmentIsBooked}
         DelNewProcedureCart={props.DelNewProcedureCart}
         UnBooking={props.UnBooking}
         When={E.When} Price={E.Price} />);
   return (
      <table className={s.table_wrapper}>
         <thead className={s.table_header}  >
            <tr>
               <td>id</td>
               <td>ProcedureName</td>
               <td>ProcedureClass</td>
               <td>When</td>
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