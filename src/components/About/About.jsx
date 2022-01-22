import s from './About.module.css'



const About = (props) => {
   let AboutElement = props.About.map((E) =>
      <div className={s.About_wrapper}>
         <div className={s.About_info_conteiner}>
            <div className={s.tile_conteiner}>
               <h1 className={s.About_title}>{E.title}</h1>
            </div>
            <div className={s.text_conteiner}>
               <h4 className={s.About_text}>{E.Text}</h4>
            </div>
            <div className={s.btn_conteiner}>
               <button className={s.About_btn}>
                  <strong>BOOK A COMPLIMENTARY CONSULTATION</strong>
               </button>
            </div>
         </div>
         <div className={s.About_video_conteienr}>
            <img src={E.img} alt="" />
         </div>
      </div>
   );
   return (
      <div>
         {AboutElement}
      </div>

   );
};

export default About;