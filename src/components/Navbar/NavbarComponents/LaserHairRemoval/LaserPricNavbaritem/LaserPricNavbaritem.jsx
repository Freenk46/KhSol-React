import { NavLink } from 'react-router-dom';
import s from '../LaserPricNavbar/LaserPricNavbar.module.css'


const LaserPricNavbaritem = (props) => {
    debugger;

    let path = `/LaserHairRemoval/${props.Path}/${props.PricNavbarPath}`;
    return <div  >
        <NavLink activeClassName={s.active} to={path} ><strong>{props.name}</strong></NavLink>
    </div>
    
}

export default LaserPricNavbaritem;