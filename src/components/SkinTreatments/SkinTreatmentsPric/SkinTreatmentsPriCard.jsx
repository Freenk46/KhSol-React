
import SkinTreatmentsPricitme from './SkinTreatmentsPricitme';
import s from './SkinTreatmentsPric.module.css';
 const SkinTreatmentsPricCard = (props) => {
    
     let SkinTreatmentsPricitmeElements= props.state.map((E) => <SkinTreatmentsPricitme unfollow={props.unfollow} follow={props.follow} Duration={E.Duration} Procedure={E.Procedure} Pric={E.Pric} NavbarClass={E.NavbarClass} Prerequisite={E.Prerequisite} id={E.id} Followed={E.Followed} ProcedureClass={props.state}/>) ;
     
    return (
            <div>
                  <div className={s.PricCardBlock} >
                     {SkinTreatmentsPricitmeElements}
                    </div>
             </div>
    )
 }
export default SkinTreatmentsPricCard;