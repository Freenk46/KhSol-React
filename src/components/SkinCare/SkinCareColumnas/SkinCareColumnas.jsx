import { NavLink } from 'react-router-dom';
import s from './SkinCareColumnas.module.css'



const SkinCareColumnas = (props) => {
   return (
      <div className={s.Columnas_wrapper}>
         <div className={s.Columnas_conteiner}>
            <div className={s.Columnas_item1}>
               <div className={s.item_title}>
                  <h3>Skin Treatments</h3>
               </div>
               <div className={s.itme_img_conteiner}>
                  <img className={s.itme_img} src="https://www.laserclinics.co.uk/contentassets/f31212480c7a490392e986d4eb5fb1b3/skin-treatments.jpg" alt=""></img>
               </div>
               <div className={s.itme_text}>
                  <h4>Our range of non-invasive treatments can help you maintain a natural, youthful appearance to show off your best features.</h4>
               </div>
               <div className={s.itme_btn_conteiner}>
                  <button className={s.itme_btn2} ><NavLink className={s.btn_Nav} to="/SkinTreatments">LEARN MORE</NavLink></button>
               </div>
            </div>
            <div className={s.Columnas_item2}>
               <div className={s.item_title}>
                  <h3>Skin Concerns</h3>
               </div>
               <div className={s.itme_img_conteiner}>
                  <img className={s.itme_img} src="https://www.laserclinics.co.uk/contentassets/3a0dd9450e844c81b0a5adef4bf7d1df/skin-card-2-1.png" alt=""></img>
               </div>
               <div className={s.itme_text}>
                  <h4>The more we know about your skin, the more we can get to the heart of your skin concerns.</h4>
               </div>
               <div className={s.itme_btn_conteiner}>
                  <button className={s.itme_btn2} ><NavLink className={s.btn_Nav} to="/SkinConcerns">LEARN MORE</NavLink></button>
               </div>
            </div>

         </div>
      </div>
   );
};

export default SkinCareColumnas;