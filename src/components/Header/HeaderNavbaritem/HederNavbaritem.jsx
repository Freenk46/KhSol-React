import s from '../Header.module.css';
import { NavLink } from 'react-router-dom';

const HeaderNavbaritem = (props) => {

    let path = props.HeaderNavbarPath;
    return <div className={s.Head_Menu_item} >
        <NavLink className={s.Head_Menu_link} to={path} >{props.name}</NavLink>
    </div>
}

export default HeaderNavbaritem;