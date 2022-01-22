import s from './CosmeticInjections.module.css';
import Poster from '../Poster/Poster';
import About from '../About/About';
import Columnas from '../Columnas/Columnas';
const CosmeticInjections = (props) => {
   debugger;
   return (
      <div className={s.SkinTreatmentswrapper}>
         <div className={s.p} >
            <Poster Poster={props.Poster} />
         </div>
         <div className={s.a}>
            <About About={props.About} />
         </div>
         <div className={s.x} >
            <Columnas Columnas={props.Columnas} />
         </div>
      </div>
   );
}
export default CosmeticInjections;