import { combineReducers, createStore } from "redux";
import ManePagereducer from "./ManePage-reducer";
import LaserHairRemovalreducer from "./LaserHairRemoval-reducer";
import NewProcedurereducer from "./NewProcedure-reducer";
import SkinTreatmentsreducer from "./SkinTreatments-reducer";
import Usersreducer from "./Users-reducer";
let reducers=combineReducers({
    NewProcedurereducer:NewProcedurereducer,
    LaserHairRemovalreducer:LaserHairRemovalreducer,
    ManePagereducer:ManePagereducer,
    SkinTreatmentsreducer:SkinTreatmentsreducer,
    Usersreducer:Usersreducer,
});
let store=createStore(reducers);


export default store;