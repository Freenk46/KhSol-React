import React from "react";
import s from "./MyProcedure.module.css"
const MyProcedureItem = (props) => {


   return <tr id={props.id} className={s.tr}  >
      <td>{props.id}</td>
      <td >{props.ProcedureName}</td>
      <td >{props.ProcedureClass}</td>
      <td >{props.Gender}</td>
      <td>{props.When}</td>
      <td >{props.Time}</td>
      <td>{props.Price}$</td>
      <td>X</td>
   </tr >

}
export default MyProcedureItem;