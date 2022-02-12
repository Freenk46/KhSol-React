import { NavLink } from 'react-router-dom';
import About from '../About/About';
import Poster from '../Poster/Poster';
import s from './LaserHairRemoval.module.css'
const LaserHairRemoval = (props) => {
    return (
        <div className={s.LHR_wrapper}>
            <div className={s.p}>
                <Poster Poster={props.Poster} />
            </div>
            <div className={s.a}>
                <About About={props.About} />
            </div>
            <div className={s.Title_Conteiner}>
                <h1 className={s.Title}>LaserHairRemoval</h1>
            </div>
            <div className={s.Gender_Conteiner}>
                <div className={s.Women}>
                    <NavLink to="/LaserHairRemoval/Women">
                        <img src="https://www.laserclinics.co.uk/contentassets/9aa3d0d5dce845198e0b57751a7124ad/about-lhr-700x450.jpg" alt="About Laser Hair Removal"></img>
                    </NavLink>
                    <p className={s.Women_P}>About Laser Hair Removal</p>
                </div>
                <div className={s.Men}>
                    <NavLink to="/LaserHairRemoval/Men">
                        <img src="https://www.laserclinics.co.uk/contentassets/4c2eaf5138bb4b9bb6d36af0ce087d15/mens-lhr-700x450.jpg" alt="About Laser Hair Removal"></img>
                    </NavLink>
                    <p className={s.Men_p}>Mens Laser Hair Removal</p>
                </div>
            </div>
        </div>
    );
}
export default LaserHairRemoval;