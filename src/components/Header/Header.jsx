import s from './Header.module.css';
import { NavLink} from 'react-router-dom';
import HeaderNavbaritem from './HeaderNavbaritem/HederNavbaritem';
 const Header = (props) => {
    let HeaderNavbarElements= props.HeaderNavbarDate.map((E) => <HeaderNavbaritem name={E.name} HeaderNavbarPath={E.HeaderNavbarPath} />) ;
    
    return (
        
                <div className={s.Nav}>
                    <div className={s.logo}> 
                    <NavLink  activeClassName={s.active} to="/Home" >
                        <img src="/img/kHSOL2.png" ></img>
                    </NavLink>
                    </div>
                    <div className={s.NavMenu}> 
                        {HeaderNavbarElements}
                        </div>
                        <button className={s.Navbtn}>
                        <NavLink className={s.NavbtnLink} to="sign-up">Sign Up</NavLink>
                        </button>
                </div>
    );
}
export default Header;