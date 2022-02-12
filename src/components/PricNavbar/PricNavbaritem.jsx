import React from "react";
import s from "./PricNavbar.module.css"
const PricNavbaritem = (props) => {
    const changeProcedureType = () => {
        props.setProcedureType(props.id);
    };
    return <div>
        <button className={s.Navbar_btn} onClick={changeProcedureType}><strong>{props.name}</strong></button>
    </div>
}
export default PricNavbaritem;