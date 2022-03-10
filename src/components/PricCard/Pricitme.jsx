import { NavLink } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import s from './Pric.module.css'
const Pricitme = (props) => {
    const navigate = useNavigate();
    let addProcedureCart = () => {
        let formData = {
            ProcedureId: props.id,
            ProcedureName: props.Procedure,
            ProcedureClass: props.NavbarClass,
            Time: '12/07/2021 05:04 PM',
            Price: props.Pric,
            ClassId: props.index,
            GenderId: props.GenderId,
        };
        if (!props.isAuth) {
            return navigate("/Login");
        } else
            props.ProcedureIsBooked(props.index, props.id, props.NavbarClass, props.GenderId);
        props.AddNewProcedureCart(formData);
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
                        <h5>{props.Pric}$</h5>
                    </div>
                    <NavLink className={s.Prerequisite}>
                        <h5>{props.Prerequisite}</h5>
                    </NavLink>
                    <div className={s.Duration}>
                        <h5>{props.Duration}</h5>
                    </div>
                    <div className={s.ADD}>
                        {props.Booking ? <button>Booked</button>
                            : <button className={s.Navbtn} onClick={addProcedureCart} > <NavLink className={s.NavbtnLink}> ADD </NavLink> </button>}
                    </div>
                </div>
            </div>
            <button type='submit'>
            </button>
        </div>
    )
}
export default connect()(Pricitme);