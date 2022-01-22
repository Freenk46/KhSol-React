
import s from './Navbar.module.css';
import Navbaritem from './Navbaritem/Navbaritem';



const Navbar = (props) => {
    let NavbarElements = props.NavbarDate.map((E) => <Navbaritem name={E.name} NavbarPath={E.NavbarPath} />);
    return (
        <div className={s.Nav_Menu}>
            <ul className={s.Nav_Menu_list}>{NavbarElements}</ul>
        </div>
    )
}
export default Navbar;