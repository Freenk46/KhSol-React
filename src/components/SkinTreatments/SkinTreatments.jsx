
import s from './SKinTreatments.module.css';
import PricCard from '../PricCard/PriCard';
import PricNavbar from '../PricNavbar/PricNavbar';
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
                <PricNavbar PricNavbarData={props.STPricNavbarData}
                    setProcedureType={props.setProcedureType}
                />
            </div>
            <div className={s.LaserPricboxs}>
                <PricCard
                    GenderId={props.GenderId}
                    index={props.index}
                    ProcedureIsBooked={props.TreatmentProcedureIsBooked}
                    AddNewProcedureCart={props.AddNewProcedureCart}
                    login={props.login} email={props.email} Procedures={props.TreatmentsProcedures} isAuth={props.isAuth} />
            </div>
        </div>
    );
}
export default SkinTreatments;