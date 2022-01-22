import Preloader from '../../Common/Preloader/Preloader';
import MyProfile from '../MyProfile';
import CartProcedure from '../MyProfileCart/CartProcedure';
import s from "./CartProcedure.module.css"

const MyProfileCart = (props) => {

   let BayNewProcedure = () => {
      props.BayNewProcedure();
   }
   return (
      <div className={s.About_wrapper}>
         <MyProfile login={props.login} img={props.img} />
         <div className={s.Editer_conteiner}>
            <div className={s.Edit_btn_conteiner}>
               <button className={s.Edit_btn} >Edit</button>
            </div>
            <div className={s.TotalPrice_conteiner}>
               <h1 className={s.TotalPrice_title} > {props.TotalPrice}$</h1>
            </div>
         </div>
         <div className={s.Menu_item_conteiner}>
            <CartProcedure ChangeNewId={props.ChangeNewId} TotalPrice={props.TotalPrice}
               DelNewProcedureCart={props.DelNewProcedureCart}
               NewProcedure={props.NewProcedure} />
         </div>
         <div className={s.Bay_btn_conteiner}>
            <button className={s.Bay_btn} onClick={BayNewProcedure} >Bay</button>
         </div>
      </div>


   );
}
export default MyProfileCart;