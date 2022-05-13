import s from '../Admin.module.css'

const UserBasket = (props) => {
   return (
      <table className={s.table_wrapper}>
         <thead className={s.table_header}  >
            <tr>
               <td>id</td>
               <td>ProcedureName</td>
               <td>ProcedureClass</td>
               <td>ProcedureType</td>
               <td>When</td>
               <td>duration</td>
               <td>Price</td>


            </tr>
         </thead>
         <tbody>
            {props.basket.map((E) =>
            (<tr id={E.procedure.id} className={s.tr}  >
               <td>{E.procedure.id}</td>
               <td >{E.procedure.name}</td>
               <td >{props.class[E.procedure.classId - 1].name}</td>
               <td >{props.type[E.procedure.typeId - 1].name}</td>
               <td>{E.procedure.createdAt}</td>
               <td >{E.procedure.duration}</td>
               <td>{E.procedure.price}$</td>
            </tr >
            ))}
         </tbody>
      </table >
   );
};

export default UserBasket;