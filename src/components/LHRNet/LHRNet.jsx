import { NavLink } from 'react-router-dom';
import s from './LHRNet.module.css'



const LHR = (props) => {
   return (
      <div className={s.LHR_wrapper}>
         <div className={s.img_conteiner}>
            <img className={s.LHR_img} src="https://www.laserclinics.co.uk/globalassets/duo_laser-hair-layered-1.png?width=1400&mode=max" alt=""></img>
         </div>
         <div className={s.info_conteiner}>
            <div className={s.title_conteiner}>
               <h5 className={s.info_title_mini} > Buy more, save more</h5>
               <h1 className={s.info_title}>Laser Hair Removal</h1>
            </div>
            <div className={s.text_conteiner}>
               <h3 className={s.info_text}>
                  Throw out the razors. No more waxing. Unlike other hair removal options, our medical-grade Laser Hair Removal means fast, safe, cost-effective, reliable, and permanent hair reduction. Our market-leading laser technology caters to all skin types, all skin tones, and genders. It's Laser Hair Removal tailored to you.
               </h3>
            </div>
            <div className={s.menu_conteiner}>
               <div className={s.Women_conteiner}>
                  <h3 className={s.menu_item_Women}>Women</h3>
               </div>
               <div className={s.Men_conteiner}>
                  <h3 className={s.menu_item_Men}>Men</h3>
               </div>

            </div>
            <div className={s.menu_component_conteiner}>

            </div>
            <div className={s.btn_conteiner} >
               <button className={s.btn_1} >SEE ALL LASER HAIR</button>
               <button className={s.btn_2}><NavLink to="/LaserHairRemoval" className={s.btn_Nav}>LEARN MORE</NavLink></button>
            </div>
         </div>
      </div >
   );
};

export default LHR;