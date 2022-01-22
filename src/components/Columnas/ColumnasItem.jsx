import React from "react";
import s from './Columnas.module.css'

const ColumnasItem = (props) => {
   return <div className={s.Columnas_conteiner}>
      <div className={s.Columnas_item1}>
         <div className={s.item_title}>
            <h3>{props.title}</h3>
         </div>
         <div className={s.itme_img_conteiner}>
            <img className={s.itme_img} src={props.img} alt=""></img>
         </div>
         <div className={s.item_info}>
            <div>
               <h5>DISCOMFORT</h5>
               <h1>{props.DISCOMFORT}</h1>
            </div>
            <div>
               <h5>DOWNTIME</h5>
               <h5>{props.DOWNTIME}</h5>
            </div>
            <div>
               <h5>PAIR WITH</h5>
               <h5>{props.PAIRWITH}</h5>
            </div>
         </div>
         <div className={s.itme_text}>
            <h4>{props.Text}</h4>
         </div>
         <div className={s.itme_btn_conteiner}>
            <button className={s.itme_btn1} >BOOK ME IN</button>
            <button className={s.itme_btn2} >LEARN MORE</button>
         </div>
      </div>
   </div>


};

export default ColumnasItem;