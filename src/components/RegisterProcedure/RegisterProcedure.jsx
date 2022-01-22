import FormRegistProcedureConteiner from './FormRegistProcedure/FormRegistProcedureConteiner';
import s from '../RegisterProcedure/FormRegistProcedure/RegisterProcedure.module.css'

const RegisterProcedure = (props) => {

    return (
        <div className={s.formcontainer}>
            <div className={s.formcontentleft}>
            </div>
            <FormRegistProcedureConteiner />
        </div>

    );
}
export default RegisterProcedure;