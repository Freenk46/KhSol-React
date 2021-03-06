import s from './Footer.module.css';
import { NavLink } from 'react-router-dom';
import HeaderNavbaritem from '../Header/HeaderNavbaritem/HederNavbaritem';
import Navbaritem from '../Navbar/Navbaritem/Navbaritem';
import { AiOutlineCaretUp } from "react-icons/ai";
const Footer = (props) => {
    let HeaderNavbarElements = props.HeaderNavbarDate.map((E) => <HeaderNavbaritem key={E.id} name={E.name} HeaderNavbarPath={E.NavbarPath} />);
    let NavbarElements = props.NavbarDate.map((E) => <Navbaritem key={E.id} name={E.name} NavbarPath={E.NavbarPath} />);
    let FNDElements = props.FND.map((E) => <Navbaritem key={E.id} name={E.name} NavbarPath={E.NavbarPath} />);
    return (
        <div className={s.Footer_Wrapper}>
            <div className={s.Footer_Conteiner}>
                <div className={s.Footer_Logo_Conteiner}>
                    <NavLink className={s.Footer_logo} activeClassName={s.active} to="/Home" >
                        <img src="https://media.istockphoto.com/vectors/property-corporate-icon-logo-sign-abstract-design-gold-color-on-black-vector-id1153638665?k=20&m=1153638665&s=612x612&w=0&h=0-mZ0r7xrF9LSSkosidcQ8MI7gmmN9guHC1JMChdClA=" alt="xui" ></img>
                    </NavLink>
                </div>
                <div className={s.Footer_Menu_Conteiner}>
                    <div className={s.Head_Menu}>
                        {HeaderNavbarElements}
                    </div>
                    <div className={s.Nav_Menu}>
                        {NavbarElements}
                    </div>
                    <div className={s.Contact_Menu}>
                        {FNDElements}
                    </div>
                </div>
                <span className={s.AiOutlineCaretUp}>
                    <a href='#' className={s.AiOutlineCaretUp}><AiOutlineCaretUp /></a>
                </span>
            </div>
        </div>
    );
}
export default Footer;