
import s from './Navbar.module.css';
import Navbaritem from './Navbaritem/Navbaritem';
    
     

const Navbar = (props) => {
    
    let NavbarElements= props.NavbarDate.map((E) =>  <Navbaritem name={E.name} NavbarPath={E.NavbarPath} />) ;



    

    return (
        <div className={s.NavMenu}>
            <div className={s.Nav}>{NavbarElements}</div>
           

        </div>
    )
}
export default Navbar;