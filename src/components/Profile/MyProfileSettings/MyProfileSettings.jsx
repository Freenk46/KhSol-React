import Preloader from '../../Common/Preloader/Preloader';
import MyProfile from '../MyProfile';
import s from "./MyProfileSettings.module.css";
const MyProfileSettings = (props) => {
   if (!props.Profile) {
      return < Preloader />
   }
   const PhotoSelector = (e) => {
      if (e.target.files.length) {
         props.SavePhoto(e.target.files[0]);
      };
   };
   return (
      <div className={s.About_wrapper}>
         <MyProfile Profile={props.Profile} img={props.img} status={props.status}
            getProfileStatus={props.getMyStatus}
            UpdateProfileStatus={props.UpdateMyStatus} />
         <div className={s.Menu_item_conteiner}>
            <div className={s.Settings_conteiner}>
               <div className={s.Profile_conteiner}>
                  <h3 className={s.Profile_Photo}>ProfilePhoto</h3>
                  <input className={s.Profile_btn} type='file' onChange={PhotoSelector}></input>
               </div>
            </div>
         </div>
      </div>
   );
}
export default MyProfileSettings;