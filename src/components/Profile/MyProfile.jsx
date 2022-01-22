import Preloader from '../Common/Preloader/Preloader';
import Procedures from './Procedures';
import s from './Profile.module.css'
const MyProfile = (props) => {
   if (!props.login) {
      return < Preloader />
   }
   return (
      <div className={s.Profile_wrapper}>
         <div className={s.Profile_title_conteiner}>
            <h1 className={s.Profile_title}>{props.login} Profile</h1>
         </div>
         <div className={s.Profile_Conteiner} >

            <div className={s.Profile_Img_Conteiner}>
               <img className={s.Profile_Img} src="https://i.pinimg.com/originals/1b/f2/b8/1bf2b80b8d29d938deafddb4c393a653.jpg" alt="large" />
            </div>
            <div className={s.Profile_Info_Conteiner}>
               <div className={s.Profile_Info_name}>
                  <h1>{props.email}</h1>
               </div>
               <div className={s.Profile_Info_Countries}>
                  <h1>Georgia</h1>
               </div>
               <div className={s.Profile_Info_Sity}>
                  <h1>facebook</h1>
               </div>
               <div className={s.Profile_Info_Gender}>
                  <h1>instagram</h1>
               </div>
               <div className={s.Profile_Info_Number}>
                  <h1>+995551093330</h1>
               </div>
            </div>
            <div className={s.Procedure_conteiner}>
               <Procedures NewProcedure={props.NewProcedure} />
            </div>
         </div>
      </div>


   );
}
export default MyProfile;