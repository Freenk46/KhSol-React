
import { NavLink } from 'react-bootstrap';
import s from './LaserPric.module.css'
const LaserPricItem = (props) => {

    return (

        <div>

            <div className={s.PricCard}>
                <span className={s.NavbarClass}> {props.NavbarClass}  </span>
                <div className={s.include}>
                    <div className={s.procedure}>
                        <h4>{props.Procedure}</h4>

                    </div>
                    <div className={s.Pric}>
                        <h4>{props.Pric}</h4>
                    </div>
                </div>
                <div className={s.ADD}>


                </div>
                <button className={s.Navbtn}>
                    <NavLink className={s.NavbtnLink} to="ADD">ADD</NavLink>
                </button>
            </div>
        </div>
    )
}

export default LaserPricItem;