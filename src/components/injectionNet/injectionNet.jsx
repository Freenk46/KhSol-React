import { NavLink } from 'react-router-dom';
import s from './injectionNet.module.css'
const Injection = (props) => {
   return (
      <div className={s.injection_wrapper}>
         <div className={s.img_conteiner}>
            <img className={s.injection_img} src="https://www.laserclinics.co.uk/globalassets/image-6-605x400-1.jpg" alt=""></img>
         </div>
         <div className={s.info_conteiner}>
            <div className={s.title_conteiner}>
               <h1 className={s.info_title}>
                  Cosmetic Injections
               </h1>
            </div>
            <div className={s.text_conteiner}>
               <h3 className={s.info_text}>
                  From dermal fillers to anti-wrinkle treatments, our experienced team is ready to create a tailored treatment plan that will deliver on your aesthetic goals.
               </h3>
            </div>
            <div className={s.btn_conteiner}>
               <button className={s.btn_1}><NavLink to="/CosmeticInjections" className={s.btn_Nav}>LEARN MORE</NavLink></button>
            </div>
         </div>


      </div>
   );
};

export default Injection;