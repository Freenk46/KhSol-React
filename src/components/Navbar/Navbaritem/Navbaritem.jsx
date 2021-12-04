import { NavLink } from 'react-router-dom';
import s from '../Navbar.module.css';


const Navbaritem = (props) => {
    let path = `/${props.NavbarPath}`;
    return <div >
        <NavLink activeClassName={s.active} to={path} ><strong>{props.name}</strong></NavLink>
    </div>
    
}

export default Navbaritem;