import { applyMiddleware, combineReducers, createStore } from "redux";
import ManePagereducer from "./ManePage-reducer";
import LaserHairRemovalreducer from "./LaserHairRemoval-reducer";
import NewProcedureReducer from "./NewProcedure-reducer";
import SkinTreatmentsreducer from "./SkinTreatments-reducer";
import Usersreducer from "./Users-reducer";
import ProfileReducer from "./Profile-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
let reducers = combineReducers({
    NewProcedureReducer: NewProcedureReducer,
    LaserHairRemovalreducer: LaserHairRemovalreducer,
    ManePagereducer: ManePagereducer,
    SkinTreatmentsreducer: SkinTreatmentsreducer,
    Usersreducer: Usersreducer,
    ProfileReducer: ProfileReducer,
    authReducer: authReducer,

});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;