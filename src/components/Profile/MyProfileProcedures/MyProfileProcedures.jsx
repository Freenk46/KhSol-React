import Preloader from '../../Common/Preloader/Preloader';
import MyProfile from '../MyProfile';
import MyProcedure from './MyProcedure';
import s from "./MyProfileProcedure.module.css"

const MyProfileProcedures = (props) => {
   if (!props.login) {
      return < Preloader />
   }
   return (
      <div className={s.About_wrapper}>
         <MyProfile login={props.login} img={props.img} />
         <div className={s.Menu_item_conteiner}>
            <MyProcedure MyProcedure={props.MyProcedure} />
         </div>
      </div>


   );
}
export default MyProfileProcedures;