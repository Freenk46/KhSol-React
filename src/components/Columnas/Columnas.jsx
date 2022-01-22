import s from './Columnas.module.css'
import ColumnasItem from './ColumnasItem';



const Columnas = (props) => {
   let ColumnasElement = props.Columnas.map((E) => <ColumnasItem title={E.title} img={E.img} Text={E.Text} DISCOMFORT={E.DISCOMFORT} DOWNTIME={E.DOWNTIME} PAIRWITH={E.PAIRWITH} />);
   return (
      <div className={s.Columnas_wrapper}>
         <div className={s.title_conteiner}>
            <h1 className={s.Columnas_title}>Our treatments</h1>
         </div>
         <div className={s.text_conteiner}>
            <h3 className={s.Columnas_text}>Rejuvenate and enhance what makes you, you. Our range of non-invasive Cosmetic Injectable treatments can help show off your best features.</h3>
         </div>
         <div className={s.Columnas_conteiner}>
            {ColumnasElement}
         </div>
      </div>
   );
};

export default Columnas;