import { NavLink } from 'react-router-dom';
import s from './SKTNet.module.css'



const SKT = (props) => {
   return (
      <div className={s.SKT_wrapper}>
         <div className={s.info_conteiner}>
            <div className={s.title_conteiner}>
               <h1 className={s.info_title}>Skin Treatments</h1>
            </div>
            <div className={s.text_conteiner}>
               <h3 className={s.info_text}>Whatever your skin concern, we have the experience, knowledge, and professional Skin Treatments to deliver the best results. Our highly-trained team of Therapists can help identify your concerns and tailor a treatment plan based on your skin goals.</h3>
            </div>
            <div className={s.procedure_conteiner}>
               <h3 >1</h3>
               <h3>2</h3>
               <h3>3</h3>
               <h3>4</h3>
               <h3>5</h3>
            </div>
            <div className={s.btn_conteiner}>
               <button className={s.btn_1}>SEE ALL SKIN TREATMENTS</button>
               <button className={s.btn_2}><NavLink to="/SkinCare" className={s.btn_Nav}>LEARN MORE</NavLink></button>
            </div>
         </div>
         <div className={s.img_conteiner}>
            <img className={s.SKT_img} src="https://www.laserclinics.co.uk/globalassets/skin-homepage-1.png?width=1400&mode=max" alt=""></img>
         </div>

      </div>
   );
};

export default SKT;