
import About from '../../../About/About';
import Injection from '../../../injectionNet/injectionNet';
import LHR from '../../../LHRNet/LHRNet';
import Poster from '../../../Poster/Poster';
import SKT from '../../../SKTNet/SKTNet';
import s from '../Home/Home.module.css';
const Home = (props) => {
    return (
        <div className={s.Home_wrapper}>
            <div className={s.p}>
                <Poster Poster={props.Poster} />
            </div>
            <div className={s.a}>
                <About About={props.About} />
            </div>
            <div className={s.l}>
                <LHR />
            </div>
            <div className={s.s}>
                <SKT />
            </div>
            <div className={s.i}>
                <Injection />
            </div>
            <div>
            </div>
        </div>

    );
}
export default Home;