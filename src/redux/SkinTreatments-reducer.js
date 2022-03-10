const TREATMENT_PROCEDURE_IS_BOKED = 'TREATMENT_PROCEDURE_IS_BOKED';
const ALL_BOOKED_REMOVAL = 'ALL_BOOKED_REMOVAL';
const TOGGLE_PROCEDURE_TYPE = 'TOGGLE_PROCEDURE_TYPE';

let initialState = {
  Procedures: [
    [
      [
        { id: 0, Procedure: 'Microdermabrasion Express', NavbarClass: 'Microdermabrasion', Duration: '20m', Pric: 232, Booking: false },
        { id: 1, Procedure: 'Microdermabrasion Refine', NavbarClass: 'Microdermabrasion', Duration: '35m', Pric: 231, Booking: false },
        { id: 2, Procedure: 'Microdermabrasion Body', NavbarClass: 'Microdermabrasion', Duration: '40m', Pric: 231, Booking: false },
        { id: 3, Procedure: 'Extractions', NavbarClass: 'Microdermabrasion', Duration: '5m', Pric: 231, Booking: false },
      ],
      [
        { id: 0, Procedure: 'Rejuvapen Decolletage', NavbarClass: 'Rejuvapen', Duration: '60m', Pric: 23, Prerequisite: '?', Booking: false },
        { id: 1, Procedure: 'Rejuvapen Breasts', NavbarClass: 'Rejuvapen', Duration: '45m', Pric: 23, Prerequisite: '?', Booking: false },
        { id: 2, Procedure: 'Rejuvapen Neck+LED', NavbarClass: 'Rejuvapen', Duration: '45m', Pric: 23, Prerequisite: '?', Booking: false },
        { id: 3, Procedure: 'Rejuvapen Face', NavbarClass: 'Rejuvapen', Duration: '60m', Pric: 23, Prerequisite: '?', Booking: false },
        { id: 4, Procedure: 'Rejuvapen Face+LED', NavbarClass: 'Rejuvapen', Duration: '80m', Pric: 23, Prerequisite: '?', Booking: false },
        { id: 5, Procedure: 'Rejuvapen Hips', NavbarClass: 'Rejuvapen', Duration: '80m', Pric: 22, Prerequisite: '?', Booking: false },
        { id: 6, Procedure: 'Rejuvapen Thighs', NavbarClass: 'Rejuvapen', Duration: '80m', Pric: 23, Prerequisite: '?', Booking: false },
        { id: 7, Procedure: 'Rejuvapen Buttocks', NavbarClass: 'Rejuvapen', Duration: '60m', Pric: 23, Prerequisite: '?', Booking: false },
        { id: 8, Procedure: 'Rejuvapen Stomach', NavbarClass: 'Rejuvapen', Duration: '45m', Pric: 23, Prerequisite: '?', Booking: false },
        { id: 9, Procedure: 'Rejuvapen Face&Neck+LED', NavbarClass: 'Rejuvapen', Duration: '90m', Pric: 23, Prerequisite: '?', Booking: false },
        { id: 10, Procedure: 'Rejuvapen Bottom', NavbarClass: 'Rejuvapen', Duration: '60m', Pric: 23, Prerequisite: '?', Booking: false },
      ],
      [
        { id: 0, Procedure: 'LEDYellow(AddOn)', NavbarClass: 'LEDlightTherapy', Pric: 23, Duration: '15m', Booking: false },
        { id: 1, Procedure: 'LEDYellow', NavbarClass: 'LEDlightTherapy', Pric: 23, Duration: '20m', Booking: false },
        { id: 2, Procedure: 'LEDBlue', NavbarClass: 'LEDlightTherapy', Pric: 23, Duration: '30m', Booking: false },
      ],
      [
        { id: 0, Procedure: 'HydraFacial Express', NavbarClass: 'HydraFacial', Pric: 233, Duration: '30m', Booking: false },
        { id: 1, Procedure: 'HydraFacial (Deluxe)', NavbarClass: 'HydraFacial', Pric: 231, Duration: '45m', Booking: false },
        { id: 2, Procedure: 'HydraFacial (PlatinumAnti-Acne)', NavbarClass: 'HydraFacial', Pric: 23, Duration: '50m', Booking: false },
        { id: 3, Procedure: 'HydraFacial (PlatinumCollagen)', NavbarClass: 'HydraFacial', Pric: 223, Duration: '50m', Booking: false },
        { id: 4, Procedure: 'HydraFacial (PlatinumPigmentation SunDamage)', NavbarClass: 'HydraFacial', Pric: 233, Duration: '50m', Booking: false },
        { id: 5, Procedure: 'HydraFacial (PlatinumAnti-Ageing)', NavbarClass: 'HydraFacial', Pric: 213, Duration: '50m', Booking: false },
        { id: 6, Procedure: 'HydraFacial (Deluxe12 Month Bundle)', NavbarClass: 'HydraFacial', Pric: 21, Duration: '45m', Booking: false },
      ],
      [
        { id: 0, Procedure: 'institut PeelAccelerator', NavbarClass: 'CosmeticGradePeels', Pric: 23, Duration: '25m', Booking: false },
        { id: 1, Procedure: 'institut AHA Enzymatic Micro Peel + LED', NavbarClass: 'CosmeticGradePeels', Pric: 23, Duration: '30m', Booking: false },
        { id: 2, Procedure: 'institut Ageless Peel', NavbarClass: 'CosmeticGradePeels', Pric: 23, Duration: '30m', Booking: false }
      ],
    ],
  ],
  PricNavData: [
    { id: 0, name: 'Microdermabrasion', PricNavbarPath: 'Microdermabrasion', },
    { id: 1, name: 'Rejuvapen', PricNavbarPath: 'Rejuvapen', },
    { id: 2, name: 'LEDlightTherapy ', PricNavbarPath: 'LEDlightTherapy', },
    { id: 3, name: 'HydraFacial', PricNavbarPath: 'HydraFacial', },
    { id: 4, name: 'CosmeticGradePeels', PricNavbarPath: 'CosmeticGradePeels', }
  ],
  Poster: [
    {
      title: 'Skin tailored to you',
      Text: 'Light up the room long after you’ve gone. Revitalise your skin by targeting any area – wrinkles, veins, scars, acne reduction, or simply create a more radiant complexion.',
      img: 'https://www.laserclinics.co.uk/contentassets/f18223b7e76d4c5ba671cfe450595f2d/lc_web-banner_1400x600px_skin.png?width=1920&mode=max'
    },
  ],
  About: [
    {
      title: 'About Our Skin Treatments',
      Text: "Whatever your skin concern, we have the experience, knowledge, and professional Skin Treatments to deliver the best results. From acne to pigmentation, fine lines to stretch marks, enlarged pores to Rosacea, and everything in-between, our experienced Therapists will design a tailored treatment plan to deliver on your skin goals.",
      img: 'https://www.laserclinics.co.uk/contentassets/5ee1b91ae6fc4150b692c5a8fa454a46/cosmetic-inject-700x450.jpg',
    },
  ],
  ProcedureNames: [
    { id: 0, Procedure: 'Microdermabrasion Express', NavbarClass: 'Microdermabrasion', },
    { id: 1, Procedure: 'Microdermabrasion Refine', NavbarClass: 'Microdermabrasion', },
    { id: 2, Procedure: 'Microdermabrasion Body', NavbarClass: 'Microdermabrasion', },
    { id: 3, Procedure: 'Extractions', NavbarClass: 'Microdermabrasion', },
  ],
  index: 0,
  GenderId: 0,

}
const SkinTreatmentsreducer = (state = initialState, action) => {
  switch (action.type) {
    case TREATMENT_PROCEDURE_IS_BOKED: {
      let stateCopy = { ...state };
      stateCopy.Procedures = [...state.Procedures];
      if (stateCopy.Procedures[0][action.ClassId][action.ProcedureId].NavbarClass === action.NavbarClass) {
        if (stateCopy.Procedures[0][action.ClassId][action.ProcedureId].Booking === true) {
          stateCopy.Procedures[0][action.ClassId][action.ProcedureId].Booking = false;
        } else
          stateCopy.Procedures[0][action.ClassId][action.ProcedureId].Booking = true;
      }
      return stateCopy
    }
    case ALL_BOOKED_REMOVAL: {
      let stateCopy = { ...state };
      stateCopy.Procedures = [...state.Procedures];
      for (var i = 0; i < stateCopy.Procedures[0].length; i++) {
        for (var k = 0; k < stateCopy.Procedures[0][i].length; k++) {
          if (stateCopy.Procedures[0][i][k].Booking === true) {
            stateCopy.Procedures[0][i][k].Booking = false;
          };
        };
      };
      return stateCopy
    };
    case TOGGLE_PROCEDURE_TYPE: {
      return { ...state, index: action.index }
    };
    default: return state;
  };
};
export const TreatmentProcedureIsBooked = (ClassId, ProcedureId, NavbarClass) => ({ type: TREATMENT_PROCEDURE_IS_BOKED, ClassId, ProcedureId, NavbarClass })
export const AllBookedRemoval = () => ({ type: ALL_BOOKED_REMOVAL, })
export const setProcedureType = (index) => ({ type: TOGGLE_PROCEDURE_TYPE, index })
export default SkinTreatmentsreducer;