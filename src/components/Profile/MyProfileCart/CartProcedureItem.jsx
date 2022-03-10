import React from "react";
import s from "./CartProcedure.module.css"
const CartProcedureItem = (props) => {


   let DelNewProcedureCart = () => {
      props.DelNewProcedureCart(props.id);
      props.LaserIsBooked(props.ClassId, props.ProcedureId, props.ProcedureClass, props.GenderId)
      props.TreatmentIsBooked(props.ClassId, props.ProcedureId, props.ProcedureClass)

   }
   return <tr id={props.id} className={s.tr}>
      <td>{props.id}</td>
      <td >{props.ProcedureName}</td>
      <td >{props.ProcedureClass}</td>
      <td>{props.When}</td>
      <td>{props.Price}$</td>
      <td>
         <button onClick={DelNewProcedureCart} className={s.Del_btn} >Del</button>
      </td>

   </tr>

}
export default CartProcedureItem;