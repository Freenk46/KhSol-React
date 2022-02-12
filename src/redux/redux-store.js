import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import LaserHairRemovalreducer from "./LaserHairRemoval-reducer";
import ProcedureReducer from "./Procedure-reducer";
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
    ProcedureReducer: ProcedureReducer,
    LaserHairRemovalreducer: LaserHairRemovalreducer,
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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window._store_ = store;
export default store;