
import Pricitme from './Pricitme';
import s from './Pric.module.css';
import Preloader from '../Common/Preloader/Preloader';
const PricCard = (props) => {
   let index = props.index;
   const PricitmeElements = props.Procedures[index].map((E) =>
      <Pricitme
         index={props.index}
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