import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import MyProfile from '../MyProfile';
import s from "./MyProfileMessage.module.css";
import MyProfileMessageChat from './MyProfileMessageChat';

const MyProfileMessage = (props) => {
   if (!props.login) {
      return < Preloader />
   }
   return (
      <div className={s.About_wrapper}>
         <MyProfile login={props.login} img={props.img} />
         <div className={s.Menu_item_conteiner}>
            <div className={s.Message_Menu_conteiner}>
            </div>
            <div className={s.Message_Menu_item}>
               <MyProfileMessageChat
                  img={props.img}
                  login={props.login} AddNewMessage={props.AddNewMessage} UpdateNewMessage={props.UpdateNewMessage}
                  Dialog={props.Dialog} NewElementMessage={props.NewElementMessage}
               />
            </div>
         </div>
      </div>


   );
}
export default MyProfileMessage;