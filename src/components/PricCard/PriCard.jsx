
import Pricitme from './Pricitme';
import s from './Pric.module.css';
const PricCard = (props) => {
   let index = props.index;
   let GenderId = props.GenderId;
   const PricitmeElements = props.Procedures[GenderId][index].map((E) =>
      <Pricitme
         index={props.index}
         GenderId={props.GenderId}
         key={E.id}
         Duration={E.Duration} Procedure={E.Procedure} Pric={E.Pric} NavbarClass={E.NavbarClass}
         Prerequisite={E.Prerequisite} id={E.id} login={props.login} email={props.email}
         AddNewProcedureCart={props.AddNewProcedureCart}
         ProcedureIsBooked={props.ProcedureIsBooked}
         isAuth={props.isAuth} Booking={E.Booking}
      />)
   return (
      <div>
         <div className={s.PricCardBlock} >
            {PricitmeElements}
         </div>
      </div>
   )
}
export default PricCard;