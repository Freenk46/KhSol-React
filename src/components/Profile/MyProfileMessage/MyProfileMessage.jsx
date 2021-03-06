import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import MyProfile from '../MyProfile';
import s from "./MyProfileMessage.module.css";
import MyProfileMessageChat from './MyProfileMessageChat';

const MyProfileMessage = (props) => {
   if (!props.Profile) {
      return < Preloader />
   }
   return (
      <div className={s.About_wrapper}>
         <MyProfile Profile={props.Profile} img={props.img} status={props.status}
            getProfileStatus={props.getMyStatus}
            UpdateProfileStatus={props.UpdateMyStatus} />
         <div className={s.Menu_item_conteiner}>
            <div className={s.Message_Menu_conteiner}>
            </div>
            <div className={s.Message_Menu_item}>
               <MyProfileMessageChat
                  img={props.img}
                  Profile={props.Profile} AddNewMessage={props.AddNewMessage}
                  Dialog={props.Dialog} NewElementMessage={props.NewElementMessage}
               />
            </div>
         </div>
      </div>


   );
}
export default MyProfileMessage;