import PricNavbaritem from './PricNavbaritem';
import s from './PricNavbar.module.css';


const PricNavbar = (props) => {
    let PricNavbarElements = props.PricNavbarData.map((E) => <PricNavbaritem id={E.id} key={E.id} name={E.name} PricNavbarPath={E.PricNavbarPath}
        setProcedureType={props.setProcedureType}
    />);
    return (
        <div className={s.NavMenu}>
            <div className={s.Nav}>{PricNavbarElements}</div>
        </div>
    )
}
export default PricNavbar;