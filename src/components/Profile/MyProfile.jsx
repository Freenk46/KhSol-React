import { NavLink } from 'react-router-dom';
import s from './Profile.module.css';

const MyProfile = (props) => {

   return (
      <div>
         <div className={s.About_Conteiner}>
            <div className={s.About_info_conteiner}>
               <div className={s.tile_conteiner}>
                  <h1 className={s.About_title}>{props.login} Profile</h1>
               </div>
               <div className={s.text_conteiner}>
                  <h4 className={s.About_text}>{props.status}</h4>
               </div>
               <div className={s.btn_conteiner}>
                  <button className={s.About_btn}>
                     <strong>BOOK A COMPLIMENTARY CONSULTATION</strong>
                  </button>
               </div>
            </div>
            <div className={s.About_video_conteienr}>
               <img src={props.img} alt="" />
            </div>
         </div>
         <div className={s.Menu_conteiner} >
            <div className={s.Menu_list}>
               <NavLink to='/MyProfile/Setting' className={s.Menu_list_item}>Setting</NavLink>
               <NavLink to='/MyProfile/MyProcedure' className={s.Menu_list_item}>MyProcedures</NavLink>
               <NavLink to="/MyProfile/Cart" className={s.Menu_list_item}>Cart</NavLink>
               <NavLink to='/MyProfile/Notification' className={s.Menu_list_item}>Notification </NavLink>
               <NavLink to='/MyProfile/Chat' className={s.Menu_list_item}> Chat </NavLink>
            </div>
         </div>
      </div >




   );
}
export default MyProfile;