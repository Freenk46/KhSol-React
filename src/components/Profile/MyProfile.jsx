import { NavLink } from 'react-router-dom';
import MyProfileStatus from './MyProfileSettings/MyProfileStatus';
import s from './Profile.module.css';
const MyProfile = (props) => {
   return (
      <div>
         <div className={s.About_Conteiner}>
            <div className={s.About_info_conteiner}>
               <div className={s.tile_conteiner}>
                  <h1 className={s.About_title}>{props.Profile.fullName}</h1>
               </div>
               <div className={s.Status_conteiner}>
                  <MyProfileStatus status={props.status} getProfileStatus={props.getProfileStatus} UpdateProfileStatus={props.UpdateProfileStatus} />
               </div>
               <div className={s.btn_conteiner}>
                  <button className={s.About_btn}>
                     <strong>BOOK A COMPLIMENTARY CONSULTATION</strong>
                  </button>
               </div>
            </div>
            <div className={s.About_video_conteienr}>
               <img className={s.Profile_Img} src={props.Profile.photos.large != null ? props.Profile.photos.large : props.img} alt="large" />
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
};
export default MyProfile;