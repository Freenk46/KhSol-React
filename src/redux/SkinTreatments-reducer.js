const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
let initialState = {
  SkinTreatments: {
    PricNavbarDate: [
      { name: 'Microdermabrasion', PricNavbarPath: 'Microdermabrasion', Followed: 'False' },
      { name: 'Rejuvapen', PricNavbarPath: 'Rejuvapen', Followed: 'False' },
      { name: 'LEDlightTherapy ', PricNavbarPath: 'LEDlightTherapy', Followed: 'False' },
      { name: 'HydraFacial', PricNavbarPath: 'HydraFacial', Followed: 'False' },
      { name: 'CosmeticGradePeels', PricNavbarPath: 'CosmeticGradePeels', Followed: 'False' }
    ],

    Microdermabrasion: [
      { id: '1', Procedure: 'Microdermabrasion Express', NavbarClass: 'Microdermabrasion', Duration: '20m', Pric: '232$', Followed: 'False' },
      { id: '2', Procedure: 'Microdermabrasion Refine', NavbarClass: 'Microdermabrasion', Duration: '35m', Pric: '231$', Followed: 'False' },
      { id: '3', Procedure: 'Microdermabrasion Body', NavbarClass: 'Microdermabrasion', Duration: '40m', Pric: '231$', Followed: 'False' },
      { id: '4', Procedure: 'Extractions', NavbarClass: 'Microdermabrasion', Duration: '5m', Pric: '231$', Followed: 'False' },
    ],
    Rejuvapen: [
      { id: '1', Procedure: 'Rejuvapen Decolletage', NavbarClass: 'Rejuvapen', Duration: '60m', Pric: '23$', Prerequisite: '?', Followed: 'False' },
      { id: '2', Procedure: 'Rejuvapen Breasts', NavbarClass: 'Rejuvapen', Duration: '45m', Pric: '23$', Prerequisite: '?', Followed: 'False' },
      { id: '3', Procedure: 'Rejuvapen Neck+LED', NavbarClass: 'Rejuvapen', Duration: '45m', Pric: '23$', Prerequisite: '?', Followed: 'False' },
      { id: '4', Procedure: 'Rejuvapen Face', NavbarClass: 'Rejuvapen', Duration: '60m', Pric: '23$', Prerequisite: '?', Followed: 'False' },
      { id: '5', Procedure: 'Rejuvapen Face+LED', NavbarClass: 'Rejuvapen', Duration: '80m', Pric: '23$', Prerequisite: '?', Followed: 'False' },
      { id: '6', Procedure: 'Rejuvapen Hips', NavbarClass: 'Rejuvapen', Duration: '80m', Pric: '23$', Prerequisite: '?', Followed: 'False' },
      { id: '7', Procedure: 'Rejuvapen Thighs', NavbarClass: 'Rejuvapen', Duration: '80m', Pric: '23$', Prerequisite: '?', Followed: 'False' },
      { id: '8', Procedure: 'Rejuvapen Buttocks', NavbarClass: 'Rejuvapen', Duration: '60m', Pric: '23$', Prerequisite: '?', Followed: 'False' },
      { id: '9', Procedure: 'Rejuvapen Stomach', NavbarClass: 'Rejuvapen', Duration: '45m', Pric: '23$', Prerequisite: '?', Followed: 'False' },
      { id: '10', Procedure: 'Rejuvapen Face&Neck+LED', NavbarClass: 'Rejuvapen', Duration: '90m', Pric: '23$', Prerequisite: '?', Followed: 'False' },
      { id: '11', Procedure: 'Rejuvapen Bottom', NavbarClass: 'Rejuvapen', Duration: '60m', Pric: '23$', Prerequisite: '?', Followed: 'False' },
    ],
    LEDlightTherapy: [
      { id: '1', Procedure: 'LEDYellow(AddOn)', NavbarClass: 'LEDlightTherapy', Pric: '23$', Duration: '15m', Followed: 'False' },
      { id: '2', Procedure: 'LEDYellow', NavbarClass: 'LEDlightTherapy', Pric: '23$', Duration: '20m', Followed: 'False' },
      { id: '3', Procedure: 'LEDBlue', NavbarClass: 'LEDlightTherapy', Pric: '23$', Duration: '30m', Followed: 'False' },
    ],
    HydraFacial: [
      { id: '1', Procedure: 'HydraFacial Express', NavbarClass: 'HydraFacial', Pric: '233$', Duration: '30m', Followed: 'False' },
      { id: '2', Procedure: 'HydraFacial (Deluxe)', NavbarClass: 'HydraFacial', Pric: '231$', Duration: '45m', Followed: 'False' },
      { id: '3', Procedure: 'HydraFacial (PlatinumAnti-Acne)', NavbarClass: 'HydraFacial', Pric: '223$', Duration: '50m', Followed: 'False' },
      { id: '4', Procedure: 'HydraFacial (PlatinumCollagen)', NavbarClass: 'HydraFacial', Pric: '223$', Duration: '50m', Followed: 'False' },
      { id: '5', Procedure: 'HydraFacial (PlatinumPigmentation SunDamage)', NavbarClass: 'HydraFacial', Pric: '233$', Duration: '50m', Followed: 'False' },
      { id: '6', Procedure: 'HydraFacial (PlatinumAnti-Ageing)', NavbarClass: 'HydraFacial', Pric: '213$', Duration: '50m', Followed: 'False' },
      { id: '7', Procedure: 'HydraFacial (Deluxe12 Month Bundle)', NavbarClass: 'HydraFacial', Pric: '213$', Duration: '45m', Followed: 'False' },
    ],
    CosmeticGradePeels: [
      { id: '1', Procedure: 'institut PeelAccelerator', NavbarClass: 'CosmeticGradePeels', Pric: '23$', Duration: '25m', Followed: 'False' },
      { id: '2', Procedure: 'institut AHA Enzymatic Micro Peel + LED', NavbarClass: 'CosmeticGradePeels', Pric: '23$', Duration: '30m', Followed: 'False' },
      { id: '3', Procedure: 'institut Ageless Peel', NavbarClass: 'CosmeticGradePeels', Pric: '23$', Duration: '30m', Followed: 'False' }
    ],
  },
}
const SkinTreatmentsreducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW: {


      return {

        ...state,
        Microdermabrasion: state.SkinTreatments.Microdermabrasion.map(p => {
          if (p.id === action.ProcedureId) {
            return { ...p, Followed: true };

          }
          debugger;
          return p;
        }),
        get NavbarClass() {
          return this._NavbarClass;
        },
        set NavbarClass(value) {
          this._NavbarClass = value;
        },
      }
    }
    case UNFOLLOW: {
      debugger;
      return {

        ...state,
        NavbarClass: action.ProcedureClass.map(p => {
          if (p.id === action.ProcedureId) {
            return { ...p, Followed: false }
          }
          return p;
        }
        )
      }
    }
    default: return state;
  }
}
export const followAC = (ProcedureId, ProcedureClass, NavbarClass) => ({ type: FOLLOW, ProcedureId: ProcedureId, ProcedureClass: ProcedureClass, NavbarClass: NavbarClass })
export const unfollowAC = (ProcedureId, ProcedureClass, NavbarClass) => ({ type: UNFOLLOW, ProcedureId: ProcedureId, ProcedureClass: ProcedureClass, NavbarClass: NavbarClass })
export default SkinTreatmentsreducer;