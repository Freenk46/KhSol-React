
import SkinTreatmentsPricitme from './SkinTreatmentsPricitme';
import s from './SkinTreatmentsPric.module.css';
const SkinTreatmentsPricCard = (props) => {

   let SkinTreatmentsPricitmeElements = props.state.map((E) =>
      <SkinTreatmentsPricitme
         Duration={E.Duration} Procedure={E.Procedure} Pric={E.Pric} NavbarClass={E.NavbarClass}
         Prerequisite={E.Prerequisite} id={E.id} login={props.login} email={props.email}

         AddNewProcedure={props.AddNewProcedure} UpdateNewName={props.UpdateNewName}
         UpdateNewProcedureClass={props.UpdateNewProcedureClass} UpdateNewSurname={props.UpdateNewSurname}
         UpdateNewNumber={props.UpdateNewNumber} UpdateNewEmail={props.UpdateNewEmail}
         UpdateNewGender={props.UpdateNewGender} UpdateNewProcedureName={props.UpdateNewProcedureName}

      />);

   return (
      <div>
         <div className={s.PricCardBlock} >
            {SkinTreatmentsPricitmeElements}
         </div>
      </div>
   )
}
export default SkinTreatmentsPricCard;