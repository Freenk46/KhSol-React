const UPDATE_PROCEDURE_NAMES = 'UPDATE_PROCEDURE_NAMES';

let initialState = {
  Microdermabrasion: [
    { id: 1, Procedure: 'Microdermabrasion Express', NavbarClass: 'Microdermabrasion', Duration: '20m', Pric: 232 },
    { id: 2, Procedure: 'Microdermabrasion Refine', NavbarClass: 'Microdermabrasion', Duration: '35m', Pric: 231 },
    { id: 3, Procedure: 'Microdermabrasion Body', NavbarClass: 'Microdermabrasion', Duration: '40m', Pric: 231 },
    { id: 4, Procedure: 'Extractions', NavbarClass: 'Microdermabrasion', Duration: '5m', Pric: 231 },
  ],
  Rejuvapen: [
    { id: 1, Procedure: 'Rejuvapen Decolletage', NavbarClass: 'Rejuvapen', Duration: '60m', Pric: 23, Prerequisite: '?' },
    { id: 2, Procedure: 'Rejuvapen Breasts', NavbarClass: 'Rejuvapen', Duration: '45m', Pric: 23, Prerequisite: '?' },
    { id: 3, Procedure: 'Rejuvapen Neck+LED', NavbarClass: 'Rejuvapen', Duration: '45m', Pric: 23, Prerequisite: '?' },
    { id: 4, Procedure: 'Rejuvapen Face', NavbarClass: 'Rejuvapen', Duration: '60m', Pric: 23, Prerequisite: '?' },
    { id: 5, Procedure: 'Rejuvapen Face+LED', NavbarClass: 'Rejuvapen', Duration: '80m', Pric: 23, Prerequisite: '?' },
    { id: 6, Procedure: 'Rejuvapen Hips', NavbarClass: 'Rejuvapen', Duration: '80m', Pric: 22, Prerequisite: '?' },
    { id: 7, Procedure: 'Rejuvapen Thighs', NavbarClass: 'Rejuvapen', Duration: '80m', Pric: 23, Prerequisite: '?' },
    { id: 8, Procedure: 'Rejuvapen Buttocks', NavbarClass: 'Rejuvapen', Duration: '60m', Pric: 23, Prerequisite: '?' },
    { id: 9, Procedure: 'Rejuvapen Stomach', NavbarClass: 'Rejuvapen', Duration: '45m', Pric: 23, Prerequisite: '?' },
    { id: 10, Procedure: 'Rejuvapen Face&Neck+LED', NavbarClass: 'Rejuvapen', Duration: '90m', Pric: 23, Prerequisite: '?' },
    { id: 11, Procedure: 'Rejuvapen Bottom', NavbarClass: 'Rejuvapen', Duration: '60m', Pric: 23, Prerequisite: '?' },
  ],
  LEDlightTherapy: [
    { id: 1, Procedure: 'LEDYellow(AddOn)', NavbarClass: 'LEDlightTherapy', Pric: 23, Duration: '15m' },
    { id: 2, Procedure: 'LEDYellow', NavbarClass: 'LEDlightTherapy', Pric: 23, Duration: '20m' },
    { id: 3, Procedure: 'LEDBlue', NavbarClass: 'LEDlightTherapy', Pric: 23, Duration: '30m' },
  ],
  HydraFacial: [
    { id: 1, Procedure: 'HydraFacial Express', NavbarClass: 'HydraFacial', Pric: 233, Duration: '30m' },
    { id: 2, Procedure: 'HydraFacial (Deluxe)', NavbarClass: 'HydraFacial', Pric: 231, Duration: '45m' },
    { id: 3, Procedure: 'HydraFacial (PlatinumAnti-Acne)', NavbarClass: 'HydraFacial', Pric: 23, Duration: '50m' },
    { id: 4, Procedure: 'HydraFacial (PlatinumCollagen)', NavbarClass: 'HydraFacial', Pric: 223, Duration: '50m' },
    { id: 5, Procedure: 'HydraFacial (PlatinumPigmentation SunDamage)', NavbarClass: 'HydraFacial', Pric: 233, Duration: '50m' },
    { id: 6, Procedure: 'HydraFacial (PlatinumAnti-Ageing)', NavbarClass: 'HydraFacial', Pric: 213, Duration: '50m' },
    { id: 7, Procedure: 'HydraFacial (Deluxe12 Month Bundle)', NavbarClass: 'HydraFacial', Pric: 21, Duration: '45m' },
  ],
  CosmeticGradePeels: [
    { id: 1, Procedure: 'institut PeelAccelerator', NavbarClass: 'CosmeticGradePeels', Pric: 23, Duration: '25m' },
    { id: 2, Procedure: 'institut AHA Enzymatic Micro Peel + LED', NavbarClass: 'CosmeticGradePeels', Pric: 23, Duration: '30m' },
    { id: 3, Procedure: 'institut Ageless Peel', NavbarClass: 'CosmeticGradePeels', Pric: 23, Duration: '30m' }
  ],
  PricNavbarDate: [
    { id: 1, name: 'Microdermabrasion', PricNavbarPath: 'Microdermabrasion', },
    { id: 2, name: 'Rejuvapen', PricNavbarPath: 'Rejuvapen', },
    { id: 3, name: 'LEDlightTherapy ', PricNavbarPath: 'LEDlightTherapy', },
    { id: 4, name: 'HydraFacial', PricNavbarPath: 'HydraFacial', },
    { id: 5, name: 'CosmeticGradePeels', PricNavbarPath: 'CosmeticGradePeels', }
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
    { id: 1, Procedure: 'Microdermabrasion Express', NavbarClass: 'Microdermabrasion', Duration: '20m', Pric: 232 },
    { id: 2, Procedure: 'Microdermabrasion Refine', NavbarClass: 'Microdermabrasion', Duration: '35m', Pric: 231 },
    { id: 3, Procedure: 'Microdermabrasion Body', NavbarClass: 'Microdermabrasion', Duration: '40m', Pric: 231 },
    { id: 4, Procedure: 'Extractions', NavbarClass: 'Microdermabrasion', Duration: '5m', Pric: 231 },
  ],

}
const SkinTreatmentsreducer = (state = initialState, action) => {
  let ProcedureNames;
  switch (action.type) {
    case UPDATE_PROCEDURE_NAMES: {

      return state
    }
    default: return state;
  }
}
export const UpdateProcedureNames = (ProcedureClassId) => ({ type: UPDATE_PROCEDURE_NAMES, ProcedureClassId })
export default SkinTreatmentsreducer;