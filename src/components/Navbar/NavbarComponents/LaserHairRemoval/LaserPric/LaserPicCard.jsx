
import LaserPricItem from './LaserPricItem';
import s from './LaserPric.module.css';
 const LaserPicCard = (props) => {
    
    
     let LaserPricItemElements= props.state.map((E) => <LaserPricItem Procedure={E.Procedure} Pric={E.Pric} NavbarClass={E.NavbarClass} />) ;
     
    return (
            <div>
                  <div className={s.PricCardBlock} >
                     {LaserPricItemElements}
                    </div>
             </div>
    )
 }
export default LaserPicCard;