import { NavLink } from 'react-router-dom';
import s from '../SkinTreatmentPricNavbar/SkinTreatmentsPricNavbar.module.css';

const SkinTreatmentsPricNavbaritem = (props) => {

    let path = `/SkinTreatments/${props.PricNavbarPath}`;
    return <div  >
        <NavLink activeClassName={s.active} to={path} ><strong>{props.name}</strong></NavLink>
    </div>

}

export default SkinTreatmentsPricNavbaritem;