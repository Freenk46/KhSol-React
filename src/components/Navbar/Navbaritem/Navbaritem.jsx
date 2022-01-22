import { NavLink } from 'react-router-dom';
import s from '../Navbar.module.css';


const Navbaritem = (props) => {
    let path = `/${props.NavbarPath}`;
    return <div className={s.Nav_Menu_item} >
        <NavLink className={s.Nav_Menu_link} to={path} ><strong>{props.name}</strong></NavLink>
    </div>
}

export default Navbaritem;