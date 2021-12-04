import s from './RegistLaserHairRemoval.module.css'
import FormRegistConteiner from './FormRegistConteiner';


const RegistLaserHairRemoval = (props) => {
  return (
    
      <div className={s.formcontainer}>
        <div className={s.formcontentleft}>
          <img className={s.formimg} src="/img/kHSOL.png" alt='spaceship' />
        </div>
          <FormRegistConteiner/>
      </div>
    
  );
};

export default RegistLaserHairRemoval;