import RegistLaserHairRemoval from './RegistLaserHairRemoval/RegistLaserHairRemoval';
import ImageSlider from '../Slider/ImageSlider';
import { SliderData } from '../Slider/SliderData';

 const RegisterProcedure = (props) => {
     
    return (
        <div>
                 <div>
            <ImageSlider slides={SliderData} />
                  </div>
                  <div>
                  <RegistLaserHairRemoval  />
                  </div>
                  </div>  
    );
}
export default RegisterProcedure;  