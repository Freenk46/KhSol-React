import React from "react";
import s from './MyProfileMessageChat.module.css';
const DialogItem = (props) => {


   return <div className={s.Chat_item}>
      <div className={s.Message_conteiner}>
         <h4 className={s.Message}>{props.Message}</h4>
      </div>

   </div>

}
export default DialogItem;