
import s from './SKinTreatments.module.css';
import ImageSlider from '../Slider/ImageSlider';
import { SliderData } from '../Slider/SliderData';
import SkinTreatmentsPricCard from './SkinTreatmentsPric/SkinTreatmentsPriCard';
import SkinTreatmentsPricNavbar from './SkinTreatmentPricNavbar/SkinTreatmentsPricNavbar';
const SkinTreatments = (props) => {
    debugger;
    return (
        <div className={s.SkinTreatmentswrapper}>
            <div className={s.p} >
                <ImageSlider slides={SliderData} />
            </div>
            <div className={s.c}>
                <h1>SkinTreatments</h1>
            </div>
            <div className={s.PricNavbar}>
                <SkinTreatmentsPricNavbar PricNavbarDate={props.STPricNavbarData} />
            </div>
            <div className={s.LaserPricboxs}>

                <SkinTreatmentsPricCard
                    AddNewProcedure={props.AddNewProcedure} UpdateNewName={props.UpdateNewName}
                    UpdateNewProcedureClass={props.UpdateNewProcedureClass} UpdateNewSurname={props.UpdateNewSurname}
                    UpdateNewNumber={props.UpdateNewNumber} UpdateNewEmail={props.UpdateNewEmail}
                    UpdateNewGender={props.UpdateNewGender} UpdateNewProcedureName={props.UpdateNewProcedureName}
                    login={props.login} email={props.email} state={props.state} />
            </div>
        </div>

    );
}
export default SkinTreatments;