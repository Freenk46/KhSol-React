import s from './InformationNet.module.css'
const InformationNet = (props) => {
  return (
    <div className={s.NetWraper}>
      <div className={s.a}>
        <h1>  How it works</h1>
      </div>
      <div className={s.b}>
        <h4>{props.Net[0].text1}</h4>
      </div>
      <div className={s.c}>
        <img className={s.img} src={props.Net[0].Mimg1} ></img>
      </div>
      <div className={s.d}>
        <h4>{props.Net[0].text2} </h4>
      </div>
      <div className={s.e}>
        <h4>{props.Net[0].text3}</h4>
      </div>
      <div className={s.f}>
        <img className={s.img} src={props.Net[0].Mimg2}></img>
      </div>
      <div className={s.g}>
        <h4>{props.Net[0].text4}</h4>
      </div>
      <div className={s.h}>
        <img className={s.img} src={props.Net[0].Mimg3}></img>

      </div>
    </div>

  );
};

export default InformationNet;