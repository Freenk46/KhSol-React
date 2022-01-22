
import s from './SKinTreatments.module.css';
import SkinTreatmentsPricCard from './SkinTreatmentsPric/SkinTreatmentsPriCard';
import SkinTreatmentsPricNavbar from './SkinTreatmentPricNavbar/SkinTreatmentsPricNavbar';
import Poster from '../Poster/Poster';
import About from '../About/About';
const SkinTreatments = (props) => {

    return (
        <div className={s.SkinTreatmentswrapper}>
            <div className={s.p} >
                <Poster Poster={props.Poster} />
            </div>
            <div className={s.a}>
                <About About={props.About} />
            </div>
            <div className={s.x} >
            </div>
            <div className={s.c}>
                <h1>SkinTreatments</h1>
            </div>
            <div className={s.PricNavbar}>
                <SkinTreatmentsPricNavbar PricNavbarDate={props.STPricNavbarData} />
            </div>
            <div className={s.LaserPricboxs}>
                <SkinTreatmentsPricCard
                    AddNewProcedureCart={props.AddNewProcedureCart}
                    login={props.login} email={props.email} state={props.state} isAuth={props.isAuth} />
            </div>
        </div>

    );
}
export default SkinTreatments;