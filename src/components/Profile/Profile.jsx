import React, { useState } from "react";
import Preloader from '../Common/Preloader/Preloader';
import s from './Profile.module.css'
import AddBan from '../Admin/AdminITem/ban'
import UserRole from "../Admin/AdminITem/addUserRole";
import UserBasket from "../Admin/AdminITem/basket";
const Profile = (props) => {

   let [Basket, setBasket] = useState(true)
   let [Role, setRole] = useState(false)
   let [Chat, setChat] = useState(false)
   let [Ban, setBan] = useState(false)

   let reset = () => {
      setBasket(false);
      setRole(false);
      setChat(false);
      setBan(false);
   }
   let showBasket = () => { reset(); setBasket(true); }
   let showWaRole = () => { reset(); setRole(true); }
   let showChat = () => { reset(); setChat(true); }
   let showBan = () => { reset(); setBan(true); }
   if (!props.initialized) {
      return <Preloader />
   }
   if (!props.user) {
      return <Preloader />
   }
   return (
      <div>
         <div className={s.About_Conteiner}>
            <div className={s.About_info_conteiner}>
               <div className={s.tile_conteiner}>
                  <h1 className={s.About_title}>{props.user.email} Profile</h1>
               </div>
               <div className={s.text_conteiner}>
               </div>
               <div className={s.btn_conteiner}>
                  <div>
                     {props.user.roles.map((E) => (
                        <h2 >{E.description}</h2>
                     ))}
                     {props.user.baned ? <h3>ბლოკირებული</h3>
                        : <h3>აქტოური</h3>}
                  </div>

               </div>
            </div>
            <div className={s.About_video_conteienr}>
               <img className={s.Profile_Img} src={"https://i.pinimg.com/originals/1b/f2/b8/1bf2b80b8d29d938deafddb4c393a653.jpg"} alt="large" />
            </div>
         </div>
         <div className={s.Menu_conteiner}>
            <div className={s.Menu_list}>
               <span className={s.Menu_list_item} onClick={showBasket}>კალათის ისტორია </span>
               <span className={s.Menu_list_item} onClick={showWaRole}>როლის მინიჭება</span>
               <span className={s.Menu_list_item} onClick={showChat}>ჩატი </span>
               <span className={s.Menu_list_item} onClick={showBan}>ბლოკირება </span>
            </div>
         </div>

         <div >
            {Basket && <div className={s.conteiner}>
               <UserBasket class={props.class} type={props.type} basket={props.basket} />
            </div >}
            {Role && <div className={s.conteiner}>
               <UserRole roles={props.roles} user={props.user} />
            </div>}
            {Chat && <div className={s.conteiner}>

            </div>}
            {Ban && <div className={s.conteiner}>
               <AddBan user={props.user} />
            </div>}
         </div>
      </div >
   );
}
export default Profile;