import InformationNet from '../../InformationNet/InformationNet';
import s from './Men.module.css';
import PricCard from '../../PricCard/PriCard';
import PricNavbar from '../../PricNavbar/PricNavbar';
import Poster from '../../Poster/Poster';
import About from '../../About/About';
const Men = (props) => {
    return (
        <div className={s.Menwrapper}>
            <div className={s.p} >
                <Poster Poster={props.Poster} />
            </div>
            <div className={s.a}>
                <About About={props.About} />
            </div>
            <div className={s.c}>
                <h1>LaserHairRemoval</h1>
            </div>
            <div className={s.n}>
                <InformationNet Net={props.Net} />
            </div>
            <div className={s.PricNavbar}>

                <PricNavbar PricNavbarData={props.LHRPricNavbarData}
                    setProcedureType={props.setLaserProcedureindex} />
            </div>
            <div className={s.LaserPricboxs}>
                <PricCard
                    index={props.index}
                    ProcedureIsBooked={props.LaserProcedureIsBooked}
                    AddNewProcedureCart={props.AddNewProcedureCart}
                    Net={props.Net}
                    login={props.login} email={props.email} Procedures={props.LaserProcedures} isAuth={props.isAuth} />
            </div>
        </div>
    );
};
export default Men;  