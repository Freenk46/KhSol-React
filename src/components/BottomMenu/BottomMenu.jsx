import s from './BottomMenu.module.css';
import { NavLink} from 'react-router-dom';
import HeaderNavbaritem from '../Header/HeaderNavbaritem/HederNavbaritem';
import Navbaritem from '../Navbar/Navbaritem/Navbaritem';
import {AiOutlineCaretUp } from "react-icons/ai";
 const BottomMenu = (props) => {
    let HeaderNavbarElements= props.HeaderNavbarDate.map((E) => <HeaderNavbaritem name={E.name} HeaderNavbarPath={E.HeaderNavbarPath} />) ;
    let NavbarElements= props.NavbarDate.map((E) =>  <Navbaritem name={E.name} NavbarPath={E.NavbarPath} HeaderNavbarPath={E.HeaderNavbarPath} />) ;
    return (
            <div  className={s.Navbar}>
                <div className={s.Nav}>
                    <NavLink className={s.logo} activeClassName={s.active} to="/Home" >
                    <img src="/img/kHSOL2.png" ></img>
                     </NavLink>
                        <div className={s.NavMenu}> 
                        {HeaderNavbarElements}
                        </div>
                        <div className={s.NavMenu}>
                        {NavbarElements}
                    </div>
                    <span className={s.AiOutlineCaretUp}>
                     <a href='#' className={s.AiOutlineCaretUp}><AiOutlineCaretUp /></a>
                     
                     </span>
                </div>
            </div>
    );
}
export default BottomMenu;