
import s from './SkinCare.module.css';
import Poster from '../Poster/Poster';
import SkinCareColumnas from './SkinCareColumnas/SkinCareColumnas';
const SkinCare = (props) => {
   return (
      <div className={s.SkinCare_wrapper}>
         <div className={s.p} >
            <Poster Poster={props.Poster} />
         </div>
         <div className={s.a}>
            <SkinCareColumnas />
         </div>
         <div className={s.x} >

         </div>
      </div>
   );
}
export default SkinCare;