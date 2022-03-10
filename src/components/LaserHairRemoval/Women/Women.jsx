
import InformationNet from '../../InformationNet/InformationNet';
import PricNavbar from '../../PricNavbar/PricNavbar';
import s from './Women.module.css';
import PricCard from '../../PricCard/PriCard';
import Poster from '../../Poster/Poster';
import About from '../../About/About';
const Women = (props) => {
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
                    setProcedureType={props.setLaserProcedureindex}
                />
            </div>
            <div className={s.LaserPricboxs}>
                <PricCard
                    GenderId={props.GenderId}
                    index={props.index}
                    ProcedureIsBooked={props.LaserProcedureIsBooked}
                    AddNewProcedureCart={props.AddNewProcedureCart}
                    Net={props.Net}
                    login={props.login} email={props.email} Procedures={props.LaserProcedures} isAuth={props.isAuth} />
            </div>
        </div>
    );
}
export default Women;  