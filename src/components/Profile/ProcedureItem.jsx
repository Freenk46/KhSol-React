import React from "react";
const Procedureitem = (props) => {
   return <tbody>
      <tr >
         <td>{props.id}</td>
         <td>{props.ProcedureName}</td>
         <td>{props.ProcedureClass}</td>
         <td>{props.Gender}</td>
         <td>{props.Name}</td>
         <td>{props.Surname}</td>
         <td>{props.Email}</td>
         <td>{props.Numer}</td>
      </tr>
   </tbody>


}

export default Procedureitem;