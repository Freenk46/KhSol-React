import Preloader from '../../Common/Preloader/Preloader';
import MyProfile from '../MyProfile';
import CartProcedure from '../MyProfileCart/CartProcedure';
import s from "./CartProcedure.module.css"

const MyProfileCart = (props) => {

   let BayNewProcedure = () => {
      props.BayNewProcedure();
      props.AllLaserProcedureIsBooked();
      props.AllBookedRemoval();
   }
   if (!props.Profile) {
      return < Preloader />
   }
   return (
      <div className={s.About_wrapper}>
         <MyProfile Profile={props.Profile} img={props.img} status={props.status}
            getProfileStatus={props.getMyStatus}
            UpdateProfileStatus={props.UpdateMyStatus} />
         <div className={s.Editer_conteiner}>
            <div className={s.Edit_btn_conteiner}>
               <button className={s.Edit_btn} >Edit</button>
            </div>
            <div className={s.TotalPrice_conteiner}>
               <h1 className={s.TotalPrice_title} > {props.TotalPrice}$</h1>
            </div>
         </div>
         <div className={s.Menu_item_conteiner}>
            <CartProcedure TotalPrice={props.TotalPrice}
               DelNewProcedureCart={props.DelNewProcedureCart}
               LaserIsBooked={props.LaserProcedureIsBooked}
               TreatmentIsBooked={props.TreatmentProcedureIsBooked}
               CartProcedure={props.CartProcedure} />
         </div>
         <div className={s.Bay_btn_conteiner}>
            <button className={s.Bay_btn} onClick={BayNewProcedure} >Buy</button>
         </div>
      </div>
   );
}
export default MyProfileCart;