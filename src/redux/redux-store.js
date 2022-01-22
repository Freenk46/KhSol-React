import { applyMiddleware, combineReducers, createStore } from "redux";
import ManePagereducer from "./ManePage-reducer";
import LaserHairRemovalreducer from "./LaserHairRemoval-reducer";
import NewProcedureReducer from "./NewProcedure-reducer";
import SkinTreatmentsreducer from "./SkinTreatments-reducer";
import Usersreducer from "./Users-reducer";
import ProfileReducer from "./Profile-reducer";
import authReducer from "./auth-reducer";
import CosmeticInjectionsReducer from "./CosmeticInjections-reducer";
import SkinCareReducer from "./SkinCare-reducer";
import SkinConcernsReducer from "./SkinConcerns-reducer";
import HomeReducer from "./Home-reducer";
import MessagesReducer from "./Messages-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import AppReducer from "./App-reducer";
let reducers = combineReducers({
    CosmeticInjectionsReducer: CosmeticInjectionsReducer,
    NewProcedureReducer: NewProcedureReducer,
    LaserHairRemovalreducer: LaserHairRemovalreducer,
    ManePagereducer: ManePagereducer,
    SkinTreatmentsreducer: SkinTreatmentsreducer,
    Usersreducer: Usersreducer,
    ProfileReducer: ProfileReducer,
    authReducer: authReducer,
    SkinCareReducer: SkinCareReducer,
    SkinConcernsReducer: SkinConcernsReducer,
    HomeReducer: HomeReducer,
    MessagesReducer: MessagesReducer,
    form: formReducer,
    AppReducer: AppReducer,

});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;