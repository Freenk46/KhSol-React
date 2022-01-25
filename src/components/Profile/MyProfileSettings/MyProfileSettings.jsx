import Preloader from '../../Common/Preloader/Preloader';
import MyProfile from '../MyProfile';
import s from "./MyProfileSettings.module.css";

const MyProfileSettings = (props) => {
   if (!props.img) {
      return < Preloader />
   }
   return (
      <div className={s.About_wrapper}>
         <MyProfile login={props.login} img={props.img} />
         <div className={s.Menu_item_conteiner}>
            <h1>Setting</h1>
         </div>
      </div>


   );
}
export default MyProfileSettings;