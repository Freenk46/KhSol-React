import s from './Header.module.css';
import { Navigate, NavLink } from 'react-router-dom';
import HeaderNavbaritem from './HeaderNavbaritem/HederNavbaritem';

const Header = (props) => {

    let HeaderNavbarElements = props.HeaderNavbarDate.map((E) => <HeaderNavbaritem name={E.name} HeaderNavbarPath={E.HeaderNavbarPath} />);
    return (
        <div className={s.wrapper}>
            <div className={s.Header_Logo_Conteiner}>
                <NavLink to="/Home" >
                    <img className={s.Header_Logo} src="https://media.istockphoto.com/vectors/property-corporate-icon-logo-sign-abstract-design-gold-color-on-black-vector-id1153638665?k=20&m=1153638665&s=612x612&w=0&h=0-mZ0r7xrF9LSSkosidcQ8MI7gmmN9guHC1JMChdClA=" alt="xui"></img>
                </NavLink>
            </div>
            <div className={s.Header_Menu_Conteiner}>
                <ul className={s.Header_List}>
                    {HeaderNavbarElements}
                </ul>
            </div>
            <div className={s.Header_end_conteiner}>
                <div className={s.Profile_conteiner}>
                    <div className={s.Profile_Logo_Conteiner}>
                        <NavLink to="/MyProfile/Cart" >
                            <img className={s.Profile_Logo} src={"https://i.pinimg.com/736x/cf/04/c1/cf04c1f86d5d9920131276f4db7ea7bf.jpg"} alt="" />
                        </NavLink>
                    </div>
                </div>
                <div className={s.Cart_conteiner}>
                    <div className={s.Cart_Logo_Conteiner}>
                        <NavLink to="/MyProfile/Cart" >
                            <img className={s.Cart_logo} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGd2sjxFQjvIeJHrB6h01ODTyCuzYmEwvy1w&usqp=CAU"} alt="" />
                        </NavLink>
                        {props.Id}
                        <br />
                        {props.TotalPrice}$

                    </div>
                </div>
                <button className={s.SignUp_Conteiner}>
                    {props.isAuth ? <button className={s.SignUp_Link} onClick={props.logout}>Logout</button>
                        : <NavLink className={s.SignUp_Link} to="/login">Login</NavLink>}

                </button>
            </div>
        </div >
    );
}
export default Header;