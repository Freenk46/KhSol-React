import NewProcedureReducer from "./NewProcedure-reducer";
import LaserHairRemovalreducer from "./LaserHairRemoval-reducer";
import ManePagereducer from "./ManPage-reducer";

let store ={
  
  _state :{
 
    ManePage: {
      NbD: [
        { name: 'LaserHairRemoval', NavbarPath: 'LaserHairRemoval' },
        { name: 'CosmeticInjectables', NavbarPath: 'CosmeticInjectables' },
        { name: 'Skin ', NavbarPath: 'Skin' },
        { name: 'Promo', NavbarPath: 'Promo' },
        { name: 'Procedure', NavbarPath: 'Procedure' }
      ],
      HNbD: [
        { name: 'OurStory', HeaderNavbarPath: 'OurStory' },
        { name: 'MedicalTeam', HeaderNavbarPath: 'MedicalTeam' },
        { name: 'COVID Info', HeaderNavbarPath: 'COVID Info' }
      ],
      
    },
    LaserHairRemoval:{
    PricNavbarDate: [
  
      { name: 'MostPopular', PricNavbarPath: 'MostPopular' },
      { name: 'Face&Neck', PricNavbarPath: 'FaceNeck' },
      { name: 'UpperBody', PricNavbarPath: 'UpperBody' },
      { name: 'LowerBody', PricNavbarPath: 'LowerBody' },
      { name: 'FullBody', PricNavbarPath: 'FullBody' }
    ],
    MostPopularProcedurePric: [
  
      { id: '1', Procedure: 'Chin', NavbarClass: 'MostPopular',  Pric:'23$' },
      { id: '2',Procedure: 'Ears', NavbarClass: 'MostPopular',  Pric:'23$'  },
      {id: '3', Procedure: 'UpperBody', NavbarClass: 'MostPopular',  Pric:'23$'  },
      {id: '4',Procedure: 'LowerBody', NavbarClass: 'MostPopular',  Pric:'23$'  },
      { id: '5',Procedure: 'FullBody', NavbarClass: 'MostPopular' ,  Pric:'23$' },
      {id: '6', Procedure: 'LowerBody', NavbarClass: 'MostPopular',  Pric:'23$'  },
       {id: '7', Procedure: 'LowerBody', NavbarClass: 'MostPopular',  Pric:'23$'  },
      
    ], 
    UpperBodyProcedurePric: [
  
      { id: '1',Procedure: 'Underarms', NavbarClass: 'UpperBody' ,  Pric:'23$'},
      {id: '2', Procedure: 'Naval', NavbarClass: 'UpperBody' ,  Pric:'23$'},
      { id: '3',Procedure: 'Laser Hair Removal Snail Trail', NavbarClass: 'UpperBody',  Pric:'23$' },
      {id: '4', Procedure: 'Areola', NavbarClass: 'UpperBody' ,  Pric:'23$'},
      { id: '5',Procedure: 'Neck (Front or Back)', NavbarClass: 'UpperBody',  Pric:'23$' },
      { id: '6',Procedure: 'Hands & Fingers', NavbarClass: 'UpperBody',  Pric:'23$' },
      { id: '7',Procedure: 'Female Stomach', NavbarClass: 'UpperBody',  Pric:'23$' },
      { id: '8',Procedure: 'Female Shoulders', NavbarClass: 'UpperBody',  Pric:'23$' },
      { id: '9',Procedure: 'Female 1/4 Arms', NavbarClass: 'UpperBody' ,  Pric:'23$'},
      { id: '10',Procedure: 'Male 1/4 Arms', NavbarClass: 'UpperBody',  Pric:'23$' },
      {id: '11', Procedure: 'Female 1/4 Back', NavbarClass: 'UpperBody',  Pric:'23$' },
      { id: '12',Procedure: 'Female 1/2 Arms', NavbarClass: 'UpperBody',  Pric:'23$' },
      {id: '13', Procedure: 'Female Chest', NavbarClass: 'UpperBody' ,  Pric:'23$'},
      { id: '14',Procedure: 'Male 1/4 Back', NavbarClass: 'UpperBody',  Pric:'23$' },
      { id: '15',Procedure: 'Female 1/2 Back', NavbarClass: 'UpperBody' },
      { id: '16',Procedure: 'Male Chest', NavbarClass: 'UpperBody' ,  Pric:'23$'},
      { id: '17',Procedure: 'Male 1/2 Arms', NavbarClass: 'UpperBody' ,  Pric:'23$'},
      { id: '18',Procedure: 'Male Shoulders', NavbarClass: 'UpperBody',  Pric:'23$' },
      { id: '19',Procedure: 'Male 1/2 Back', NavbarClass: 'UpperBody' ,  Pric:'23$'},
      {id: '20', Procedure: 'Female Full Arms', NavbarClass: 'UpperBody',  Pric:'23$' },
      { id: '21',Procedure: 'Male Full Arms', NavbarClass: 'UpperBody' ,  Pric:'23$'},
      {id: '22', Procedure: 'Male Chest & Stomach', NavbarClass: 'UpperBody',  Pric:'23$' },
      {id: '23', Procedure: 'Female 3/4 Back', NavbarClass: 'UpperBody',  Pric:'23$' },
      {id: '24', Procedure: 'Female Back', NavbarClass: 'UpperBody' ,  Pric:'23$'},
      {id: '25', Procedure: 'Back & Shoulders', NavbarClass: 'UpperBody' ,  Pric:'23$' },
      {id: '26', Procedure: 'Male Back', NavbarClass: 'UpperBody' ,  Pric:'23$'},
      { id: '27',Procedure: 'Male Back & Shoulders', NavbarClass: 'UpperBody',  Pric:'23$' }
      
    ],
    FaceNeckProcedurePric: [
  
      {id: '1', Procedure: 'Chin', NavbarClass: 'FaceNeck',  Pric:'23$'},
      {id: '1', Procedure: 'Ears', NavbarClass: 'FaceNeck' ,  Pric:'23$'},
      { id: '1',Procedure: 'Eyebrows', NavbarClass: 'FaceNeck' ,  Pric:'23$'},
      {id: '1', Procedure: 'Lip', NavbarClass: 'FaceNeck',  Pric:'23$' },
      { id: '1',Procedure: 'LipChin', NavbarClass: 'FaceNeck' ,  Pric:'23$'},
      { id: '1',Procedure: '1/2 Face (forehead to nose OR upper lip to chin)', NavbarClass: 'FaceNeck' ,  Pric:'23$'},
      {id: '1', Procedure: 'Full Face', NavbarClass: 'FaceNeck' ,  Pric:'23$'},
      {id: '1', Procedure: 'Male Facial Hair Sculpting', PricNavbarPath: 'FaceNeck' ,  Pric:'23$'},
      {id: '1', Procedure: 'Face & Neck', NavbarClass: 'FaceNeck',  Pric:'23$' },
     
      
    ],
    LowerBodyProcedurePric: [
  
      { id: '1', Procedure: 'Peri Anal', NavbarClass: 'LowerBody',  Pric:'23$'},
      { id: '2',Procedure: 'Fingers & Toes', NavbarClass: 'LowerBody' ,  Pric:'23$'},
      {id: '3', Procedure: 'Bikini', NavbarClass: 'LowerBody',  Pric:'23$' },
      {id: '4', Procedure: 'Feet & Toes', NavbarClass: 'LowerBody' ,  Pric:'23$'},
      {id: '5', Procedure: 'Female Brazilian', NavbarClass: 'LowerBody',  Pric:'23$' },
      {id: '6', Procedure: 'Female Brazilian & Underarms', NavbarClass: 'LowerBody',  Pric:'23$' },
      {id: '7', Procedure: 'Buttocks', NavbarClass: 'LowerBody',  Pric:'23$' },
      {id: '8', Procedure: '1/4 Legs', NavbarClass: 'LowerBody',  Pric:'23$' },
      {id: '9', Procedure: 'Male Brazilian', NavbarClass: 'LowerBody',  Pric:'23$' },
      {id: '10',Procedure: '1/2 Legs', NavbarClass: 'LowerBody',  Pric:'23$' },
      {id: '11', Procedure: 'Female Full Legs', NavbarClass: 'LowerBody',  Pric:'23$' },
      {id: '12', Procedure: 'Female 1/2 Legs + Brazilian & Underarms', NavbarClass: 'LowerBody',  Pric:'23$' },
      {id: '13', Procedure: 'Full Arms, Brazilian & Underarms', NavbarClass: 'LowerBody',  Pric:'23$' },
      { id: '14',Procedure: 'Female Full Legs, Brazilian & Underarms', NavbarClass: 'LowerBody',  Pric:'23$' },
      {id: '15', Procedure: 'Male Full Legs', NavbarClass: 'LowerBody',  Pric:'23$' }
      
    ],
    FullBodyProcedurePric: [
  
      { id: '1', Procedure: 'Female Full Body', NavbarClass: 'FullBody',  Pric:'23$'  },
      { id: '2',Procedure: 'Female Full Body (excludes back & shoulders)', NavbarClass: 'FullBody',  Pric:'23$'  },
      {id: '3', Procedure: 'Male Full Body', NavbarClass: 'FullBody',  Pric:'23$'  }
      
    ],
    PathMen:  [ 'Men' ],
    PathWomen:   ['Women' ],
  },
   NewProcedure:{
      ProcedureLaserHairRemoval  : [
      { id: '1', ProcedureName: 'Male Full Body',ProcedureClass: 'FullBody',  Gender:'Men' , Name:'Sergi' , Surname :'gvazava'  , Email:'serguna.sergi@gmail.com' , Numer:'551093330' },
    ],
         NewElementProcedureName:'Enter your ProcedureName',
         NewElementProcedureClass:'Enter your ProcedureClass', 
         NewElementGender:'Enter your Gender',
         NewElementName:'Enter your Name',
         NewElementSurname:'Enter your Surname' ,
         NewElementEmail:'Enter your Eemail',
         NewElementNumber:'Enter your Number'
   },
  },
  _rerenderEntireTree(){
    console.log('state change')
  },
  getState(){
  
    return this._state;
  },
  subscribe(observer) {
    this._rerenderEntireTree(observer);
  },
  dispatch(action){
    
    this._state.NewProcedure=NewProcedureReducer(this._state.NewProcedure,action);
    this._state.LaserHairRemoval=LaserHairRemovalreducer(this._state.LaserHairRemoval);
    this._state.ManePage=ManePagereducer(this._state.ManePage);
    this._rerenderEntireTree(this._state);
  }
}
export default store;
window.store = store;