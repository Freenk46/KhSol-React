import { NavLink } from 'react-router-dom';
import s from './LaserHairRemoval.module.css'
const LaserHairRemoval= () => {
    return (
            <div className={s.LaserHairRemovalwrapper}>
                <div className={s.p}>
                    <h1>LaserHairRemoval</h1>
                </div>
                <div className={s.c}>
                    <div className={s.w}>
                     <NavLink  to="Women">
                    <img src="https://www.laserclinics.co.uk/contentassets/9aa3d0d5dce845198e0b57751a7124ad/about-lhr-700x450.jpg" alt="About Laser Hair Removal"></img>
                    </NavLink>
                   <p>About Laser Hair Removal</p>
                    </div>
                    <div className={s.m}>
                    <NavLink to="Men">
                    <img src="https://www.laserclinics.co.uk/contentassets/4c2eaf5138bb4b9bb6d36af0ce087d15/mens-lhr-700x450.jpg" alt="About Laser Hair Removal"></img>
                    </NavLink>
                   <p>Mens Laser Hair Removal</p>
                   
                    </div>
                </div>
               
            </div>
    );
}
export default LaserHairRemoval;