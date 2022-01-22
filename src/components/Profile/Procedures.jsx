import React from "react";
import Procedureitem from "./ProcedureItem";
import s from "./Procedures.module.css"
const Procedures = (props) => {
   let ProceduresData = props.NewProcedure.map((E) =>
      <Procedureitem id={E.id} ProcedureName={E.ProcedureName} ProcedureClass={E.ProcedureClass}
         Gender={E.Gender} Name={E.Name} Surname={E.Surname} Email={E.Email} Numer={E.Numer} />);
   return (
      <table className={s.table_wrapper}>
         <thead className={s.table_header}  >
            <tr>
               <td>id</td>
               <td>ProcedureName</td>
               <td>ProcedureClass</td>
               <td>Gender</td>
               <td>Name</td>
               <td>Surname</td>
               <td>Email</td>
               <td>Numer</td>
            </tr>
         </thead>
         {ProceduresData}
      </table >
   )
}
export default Procedures;