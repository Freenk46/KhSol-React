import SkinTreatmentsPricNavbaritem from '../SkinTreatmentNavbaritem/SkinTreatmentsPricNavbaritem';
import s from './SkinTreatmentsPricNavbar.module.css';

const SkinTreatmentsPricNavbar = (props) => {
    let SkinTreatmentsPricNavbarElements= props.PricNavbarDate.map((E) =>  <SkinTreatmentsPricNavbaritem name={E.name} PricNavbarPath={E.PricNavbarPath}/>) ;
    return (
        <div className={s.NavMenu}>
            <div className={s.Nav}>{SkinTreatmentsPricNavbarElements}</div>
        </div>
    )
}
export default SkinTreatmentsPricNavbar ;