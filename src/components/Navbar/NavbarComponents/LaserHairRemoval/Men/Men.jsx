
import InformationNet from '../../../../InformationNet/InformationNet';
import ImageSlider from '../../../../Slider/ImageSlider';
import { SliderData } from '../../../../Slider/SliderData';
import LaserPicCard from '../LaserPric/LaserPicCard';
import LaserPricNavbar from '../LaserPricNavbar/LaserPricNavbar';
import s from './Men.module.css';
const Men = (props) => {

    return (
        <div className={s.Menwrapper}>
            <div className={s.p} >
                <ImageSlider slides={SliderData} />
            </div>
            <div className={s.c}>
                <h1>LaserHairRemoval</h1>
            </div>
            <div className={s.n}>
                <InformationNet text1={props.text1} text2={props.text2} text3={props.text3} text4={props.text4}
                    img1={props.Mimg1} img2={props.Mimg2} img3={props.Mimg3} />
            </div>
            <div className={s.PricNavbar}>
                <LaserPricNavbar Path={props.Path} PricNavbarDate={props.LHRPricNavbarDate} />
            </div>
            <div className={s.LaserPricboxs}>
                <LaserPicCard state={props.state} />
            </div>
        </div>
    );
}
export default Men;  