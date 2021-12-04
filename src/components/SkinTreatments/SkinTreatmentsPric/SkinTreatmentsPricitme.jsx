
import Button from '@restart/ui/esm/Button';
import { NavLink } from 'react-bootstrap';
import s from './SkinTreatmentsPric.module.css'
const SkinTreatmentsPricitme=(props) => {
 
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
                {props.Followed
                ?<button onClick={()=>{ props.follow(props.id,props.ProcedureClass,props.NavbarClass)}} className={s.Navbtn}> <NavLink className={s.NavbtnLink} to={props.Followed}>add</NavLink></button>
                :<button onClick={()=>{ props.unfollow(props.id,props.ProcedureClass,props.NavbarClass)}}  className={s.Navbtn}> <NavLink className={s.NavbtnLink} to={props.Followed}>beck</NavLink></button>
                }
            </div>
            
        </div>
        
    </div>
    <button  type='submit'>
         
        </button>
    </div>
    )
}

export default SkinTreatmentsPricitme;