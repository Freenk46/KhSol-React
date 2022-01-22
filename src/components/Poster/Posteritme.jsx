import React from "react";
import s from './Poster.module.css'

const PosterItem = (props) => {

   return <div style={{
      backgroundImage: `url("${props.img}")`
   }}
      className={s.Poster_wrapper} >
      <div className={s.title_conteiner}>
         <h1 className={s.Poster_title}>{props.title}</h1>
      </div>
      <div className={s.text_conteiner}>
         <h3 className={s.Poster_text}>{props.Text}</h3>
      </div>
      <div className={s.btn_conteiner}>
         <button className={s.Poster_btn}>
            BOOK A FREE CONSULTATION
         </button>
      </div>
   </div >
};

export default PosterItem;