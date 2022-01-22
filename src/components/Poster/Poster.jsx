import s from './Poster.module.css'
import PosterItem from './Posteritme';
const Poster = (props) => {
   let PosterElement = props.Poster.map((E) =>
      <PosterItem img={E.img} title={E.title} Text={E.Text} />
   );
   return (
      <div>
         {PosterElement}
      </div>

   );
};

export default Poster;