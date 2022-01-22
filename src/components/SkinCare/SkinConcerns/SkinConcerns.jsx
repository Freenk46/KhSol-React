
import s from './SkinConcerns.module.css';
import Poster from '../../Poster/Poster';
import About from '../../About/About';

const SkinConcerns = (props) => {
   debugger;
   return (
      <div className={s.SkinCare_wrapper}>
         <div className={s.p} >
            <Poster Poster={props.Poster} />
         </div>
         <div className={s.a}>
            <About About={props.About} />
         </div>
         <div className={s.x} >

         </div>
      </div>
   );
}
export default SkinConcerns;