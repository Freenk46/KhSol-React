import s from '../Header.module.css';
import { NavLink } from 'react-router-dom';

const HeaderNavbaritem = (props) => {

    let path = props.HeaderNavbarPath;
    return <div>
        <NavLink activeClassName={s.active} to={path} >{props.name}</NavLink>


    </div>


}

export default HeaderNavbaritem;