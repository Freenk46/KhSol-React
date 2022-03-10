const LASER_PROCEDURE_IS_BOKED = 'LASER_PROCEDURE_IS_BOKED';
const ALL_LASER_PROCEDURE_IS_BOKED = 'ALL_LASER_PROCEDURE_IS_BOKED';
const LASER_PROCEDURE_TYPE = 'LASER_PROCEDURE_TYPE';
let initialState = {
  Procedures: [
    [
      [
        { id: 0, Procedure: 'Underarms', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 1, Procedure: 'Naval', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 2, Procedure: 'Laser Hair Removal Snail Trail', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 3, Procedure: 'Areola', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 4, Procedure: 'Neck (Front or Back)', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 5, Procedure: 'Hands & Fingers', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 6, Procedure: 'Male 1/4 Arms', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 7, Procedure: 'Male 1/4 Back', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 8, Procedure: 'Male Chest', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 9, Procedure: 'Male 1/2 Arms', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 10, Procedure: 'Male Shoulders', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 11, Procedure: 'Male 1/2 Back', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 12, Procedure: 'Male Full Arms', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 13, Procedure: 'Male Chest & Stomach', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 14, Procedure: 'Back & Shoulders', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 15, Procedure: 'Male Back', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 16, Procedure: 'Male Back & Shoulders', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false }
      ],
      [
        { id: 0, Procedure: 'Chin', NavbarClass: 'FaceNeck', Duration: '20m', Pric: 232, Booking: false },
        { id: 1, Procedure: 'Ears', NavbarClass: 'FaceNeck', Duration: '20m', Pric: 232, Booking: false },
        { id: 2, Procedure: 'Eyebrows', NavbarClass: 'FaceNeck', Duration: '20m', Pric: 232, Booking: false },
        { id: 3, Procedure: 'Lip', NavbarClass: 'FaceNeck', Pric: 232, Booking: false },
        { id: 4, Procedure: 'LipChin', NavbarClass: 'FaceNeck', Duration: '20m', Pric: 232, Booking: false },
        { id: 5, Procedure: '1/2 Face (forehead to nose OR upper lip to chin)', NavbarClass: 'FaceNeck', Duration: '20m', Pric: 232, Booking: false },
        { id: 6, Procedure: 'Full Face', NavbarClass: 'FaceNeck', Duration: '20m', Pric: 232, Booking: false },
        { id: 7, Procedure: 'Male Facial Hair Sculpting', NavbarClass: 'FaceNeck', PricNavbarPath: 'FaceNeck', Duration: '20m', Pric: 232, Booking: false },
        { id: 8, Procedure: 'Face & Neck', NavbarClass: 'FaceNeck', Duration: '20m', Pric: 232, Booking: false },
      ],
      [
        { id: 0, Procedure: 'Peri Anal', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 1, Procedure: 'Fingers & Toes', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 2, Procedure: 'Bikini', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 3, Procedure: 'Feet & Toes', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 4, Procedure: 'Buttocks', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 5, Procedure: '1/4 Legs', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 6, Procedure: 'Male Brazilian', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 7, Procedure: '1/2 Legs', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 8, Procedure: 'Full Arms, Brazilian & Underarms', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 9, Procedure: 'Male Full Legs', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false }
      ],
      [
        { id: 0, Procedure: 'Male Full Body', NavbarClass: 'FullBody', Duration: '20m', Pric: 232, Booking: false }
      ],
    ],
    [
      [
        { id: 0, Procedure: 'Underarms', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 1, Procedure: 'Naval', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 2, Procedure: 'Laser Hair Removal Snail Trail', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 3, Procedure: 'Areola', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 4, Procedure: 'Neck (Front or Back)', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 5, Procedure: 'Hands & Fingers', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 6, Procedure: 'Female Stomach', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 7, Procedure: 'Female Shoulders', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 8, Procedure: 'Female 1/4 Arms', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 9, Procedure: 'Female 1/4 Back', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 10, Procedure: 'Female 1/2 Arms', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 11, Procedure: 'Female Chest', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 12, Procedure: 'Female 1/2 Back', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 13, Procedure: 'Female Full Arms', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 14, Procedure: 'Female 3/4 Back', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 15, Procedure: 'Female Back', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 16, Procedure: 'Back & Shoulders', NavbarClass: 'UpperBody', Duration: '20m', Pric: 232, Booking: false },
      ],
      [
        { id: 0, Procedure: 'Chin', NavbarClass: 'FaceNeck', Duration: '20m', Pric: 232, Booking: false },
        { id: 1, Procedure: 'Ears', NavbarClass: 'FaceNeck', Duration: '20m', Pric: 232, Booking: false },
        { id: 2, Procedure: 'Eyebrows', NavbarClass: 'FaceNeck', Duration: '20m', Pric: 232, Booking: false },
        { id: 3, Procedure: 'Lip', NavbarClass: 'FaceNeck', Pric: 232, Booking: false },
        { id: 4, Procedure: 'LipChin', NavbarClass: 'FaceNeck', Duration: '20m', Pric: 232, Booking: false },
        { id: 5, Procedure: '1/2 Face (forehead to nose OR upper lip to chin)', NavbarClass: 'FaceNeck', Duration: '20m', Pric: 232, Booking: false },
        { id: 6, Procedure: 'Full Face', NavbarClass: 'FaceNeck', Duration: '20m', Pric: 232, Booking: false },
        { id: 7, Procedure: 'Face & Neck', NavbarClass: 'FaceNeck', Duration: '20m', Pric: 232, Booking: false },
      ],
      [
        { id: 0, Procedure: 'Peri Anal', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 1, Procedure: 'Fingers & Toes', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 2, Procedure: 'Bikini', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 3, Procedure: 'Feet & Toes', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 4, Procedure: 'Female Brazilian', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 5, Procedure: 'Female Brazilian & Underarms', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 6, Procedure: 'Buttocks', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 7, Procedure: '1/4 Legs', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 8, Procedure: '1/2 Legs', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 9, Procedure: 'Female Full Legs', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 10, Procedure: 'Female 1/2 Legs + Brazilian & Underarms', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 11, Procedure: 'Full Arms, Brazilian & Underarms', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 12, Procedure: 'Female Full Legs, Brazilian & Underarms', NavbarClass: 'LowerBody', Duration: '20m', Pric: 232, Booking: false },
      ],
      [
        { id: 0, Procedure: 'Female Full Body', NavbarClass: 'FullBody', Duration: '20m', Pric: 232, Booking: false },
        { id: 1, Procedure: 'Female Full Body (excludes back & shoulders)', NavbarClass: 'FullBody', Duration: '20m', Pric: 232, Booking: false },
      ],
    ],
  ],
  PricNavData: [
    { id: 0, name: 'UpperBody', PricNavbarPath: 'UpperBody' },
    { id: 1, name: 'Face&Neck', PricNavbarPath: 'FaceNeck' },
    { id: 2, name: 'LowerBody', PricNavbarPath: 'LowerBody' },
    { id: 3, name: 'FullBody', PricNavbarPath: 'FullBody' },
  ],
  Net: [
    {
      text1: 'Our experienced therapists will take your skin and hair type into account before creating a personalised treatment plan.',
      text2: 'Our lasers use a large treatment spot size which allows multiple hair follicles to be targeted at the same time. ',
      text3: 'The Candela GentleLASE Pro is designed to work for clients with dark hair and lighter skin, while the GentleYAG Pro works best on a darker skin tone.',
      text4: 'With each session, hair is reduced. We recommend an initial course of 6-12 treatments, spaced 4 weeks apart (depending on area and skin tone).',
      Mimg1: 'https://www.laserclinics.co.uk/globalassets/mens-laser-after-359x318-1.jpg',
      Mimg2: 'https://www.laserclinics.co.uk/globalassets/mens-laser-consult-359x318.jpg',
      Mimg3: 'https://www.laserclinics.co.uk/globalassets/mens-laser-359x318.jpg',
      Wimg1: 'https://www.laserclinics.co.uk/contentassets/a9e6051552e242ba8ca6513dc81ee148/legs-11-359x318.jpg',
      Wimg2: 'https://www.laserclinics.co.uk/contentassets/e1922bf74756449a9f55c9e9fbbf0c37/legs-10-359x318.jpg',
      Wimg3: 'https://www.laserclinics.co.uk/contentassets/5cb5d3490dd54c989448e28611013522/ladies-laser-final.jpg',
    }
  ],
  Poster: [
    {
      title: 'Get that glow',
      Text: 'Whatever your skin concern, we have the experience, knowledge, and professional Skin Treatments to deliver tailored results.',
      img: 'https://www.laserclinics.co.uk/contentassets/943f7b784ac74868887fbc6984e005d3/v2-uk-lhr-category-banner-c09378.png?width=1920&mode=max',
    },
  ],
  About: [
    {
      title: 'About Laser Hair Removal',
      Text: "Designed with sensitive skin in mind, our Laser Hair Removal technology is safe enough to be used on any part of the body and target different skin types whilst ensuring maximum results. All of our lasers feature a unique dynamic cooling device that helps to calm, soothe and protect the skin.For your initial course of Laser Hair Removal treatment,  we recommend approximately 6-12 treatments, spaced 4-6 weeks apart (depending on area and skin tone). Everyone is slightly different so book a complimentary consultation with one of our Laser Therapists at your nearest clinic location. At Laser Clinics United Kingdom, we use the world's best lasers from Candela. Due to their larger spot size, we're able to offer shorter and more convenient treatment times than our competitors.",
      img: 'https://www.laserclinics.co.uk/contentassets/3d20614fc4d54bf49ba6f98338be3562/df-icon-banner-e0ae9b.png',
    },
  ],
  index: 0,
  Men: 0,
  Women: 1,
}
const LaserHairRemovalreducer = (state = initialState, action) => {
  switch (action.type) {
    case LASER_PROCEDURE_IS_BOKED: {
      let stateCopy = { ...state };
      stateCopy.Procedures = [...state.Procedures];
      if (stateCopy.Procedures[action.GenderId][action.ClassId][action.ProcedureId].NavbarClass === action.ProcedureClass) {
        if (stateCopy.Procedures[action.GenderId][action.ClassId][action.ProcedureId].Booking === true) {
          stateCopy.Procedures[action.GenderId][action.ClassId][action.ProcedureId].Booking = false;
        } else
          stateCopy.Procedures[action.GenderId][action.ClassId][action.ProcedureId].Booking = true;
      }
      return stateCopy
    };
    case ALL_LASER_PROCEDURE_IS_BOKED: {
      let stateCopy = { ...state };
      stateCopy.Procedures = [...state.Procedures];
      for (var i = 0; i < stateCopy.Procedures.length; i++) {
        for (var k = 0; k < stateCopy.Procedures[i].length; k++) {
          for (var j = 0; j < stateCopy.Procedures[i][k].length; j++) {
            if (stateCopy.Procedures[i][k][j].Booking === true) {
              stateCopy.Procedures[i][k][j].Booking = false;
            };
          };
        };
      };
      return stateCopy
    };
    case LASER_PROCEDURE_TYPE: {
      return { ...state, index: action.index }
    };
    default: return state;
  };
};
export const LaserProcedureIsBooked = (ClassId, ProcedureId, ProcedureClass, GenderId) => ({ type: LASER_PROCEDURE_IS_BOKED, ClassId, ProcedureId, ProcedureClass, GenderId })
export const AllLaserProcedureIsBooked = () => ({ type: ALL_LASER_PROCEDURE_IS_BOKED })
export const setLaserProcedureindex = (index) => ({ type: LASER_PROCEDURE_TYPE, index })
export default LaserHairRemovalreducer;