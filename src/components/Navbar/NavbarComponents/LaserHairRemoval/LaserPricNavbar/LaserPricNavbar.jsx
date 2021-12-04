
import LaserPricNavbaritem from '../LaserPricNavbaritem/LaserPricNavbaritem';
import s from './LaserPricNavbar.module.css';

    
    

const LaserPricNavbar = (props) => {
    debugger;

    let LaserPricNavbarElements= props.PricNavbarDate.map((E) =>  <LaserPricNavbaritem name={E.name} PricNavbarPath={E.PricNavbarPath} Path={props.Path} />) ;



    

    return (
        <div className={s.NavMenu}>
            <div className={s.Nav}>{LaserPricNavbarElements}</div>

        </div>
    )
}
export default LaserPricNavbar ;