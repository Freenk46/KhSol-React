import { NavLink } from 'react-bootstrap';
import s from './SkinTreatmentsPric.module.css'
const SkinTreatmentsPricitme = (props) => {
    let addProcedure = () => {

        props.UpdateNewName(props.login);
        props.UpdateNewSurname('gvazava');
        props.UpdateNewEmail(props.email);
        props.UpdateNewProcedureName(props.Procedure);
        props.UpdateNewProcedureClass(props.NavbarClass);
        props.UpdateNewNumber('+995551093330');
        props.UpdateNewGender('Men');
        props.AddNewProcedure();
    }

    return (
        <div>

            <div className={s.PricCard}>
                <span className={s.NavbarClass}> {props.NavbarClass}  </span>
                <div className={s.include}>
                    <div className={s.procedure}>
                        <h5>{props.Procedure}</h5>
                    </div>
                    <div className={s.Pric}>
                        <h5>{props.Pric}</h5>
                    </div>
                    <NavLink className={s.Prerequisite}>
                        <h5>{props.Prerequisite}</h5>
                    </NavLink>
                    <div className={s.Duration}>
                        <h5>{props.Duration}</h5>
                    </div>
                    <div className={s.ADD}>
                        <button className={s.Navbtn} onClick={addProcedure} > <NavLink className={s.NavbtnLink}> ADD </NavLink> </button>
                    </div>

                </div>

            </div>
            <button type='submit'>

            </button>
        </div>
    )
}

export default SkinTreatmentsPricitme;