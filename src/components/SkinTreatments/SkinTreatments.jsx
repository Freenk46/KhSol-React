
import s from './SKinTreatments.module.css';
import ImageSlider from '../Slider/ImageSlider';
import { SliderData } from '../Slider/SliderData';
import SkinTreatmentsPricCard from './SkinTreatmentsPric/SkinTreatmentsPriCard';
import SkinTreatmentsPricNavbar from './SkinTreatmentPricNavbar/SkinTreatmentsPricNavbar';
 const SkinTreatments = (props) => {

   
    return (
                  <div className={s.SkinTreatmentswrapper}>
                <div className={s.p} >
                <ImageSlider slides={SliderData} />
                </div>
                <div className={s.c}>
                    <h1>SkinTreatments</h1>
                </div>
               <div className={s.PricNavbar}>
               <SkinTreatmentsPricNavbar  PricNavbarDate={props.STPricNavbarDate}/>
               </div>
               <div className={s.LaserPricboxs}>
                <SkinTreatmentsPricCard unfollow={props.unfollow} follow={props.follow} state={props.state}  />
                </div>
            </div>
                 
    );
}
export default SkinTreatments;  