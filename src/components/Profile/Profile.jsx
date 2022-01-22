import Preloader from '../Common/Preloader/Preloader';
import s from './Profile.module.css'
const Profile = (props) => {
   if (!props.initialized) {
      return <Preloader />
   }
   if (!props.Profile) {
      return < Preloader />

   }

   return (
      <div>
         <div className={s.About_Conteiner}>
            <div className={s.About_info_conteiner}>
               <div className={s.tile_conteiner}>
                  <h1 className={s.About_title}>{props.Profile.fullName} Profile</h1>
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
               <img className={s.Profile_Img} src={props.Profile.photos.large != null ? props.Profile.photos.large : "https://i.pinimg.com/originals/1b/f2/b8/1bf2b80b8d29d938deafddb4c393a653.jpg"} alt="large" />
            </div>
         </div>
         <div className={s.Menu_conteiner} >
            <div className={s.Menu_list}>
            </div>
         </div>
      </div >
   );
}
export default Profile;