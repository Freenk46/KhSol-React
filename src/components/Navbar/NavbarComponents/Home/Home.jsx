

import ImageSlider from '../../../Slider/ImageSlider';
import { SliderData } from '../../../Slider/SliderData';
import './Home.css';
const Home = (props) => {

    return (
        <div className="wrapper">


            <div className="">

                <ImageSlider slides={SliderData} />

            </div>


            <div>
            </div>
        </div>

    );
}
export default Home;