let initialState = {
  ManePage: {
    NbD: [
      { name: 'LaserHairRemoval', NavbarPath: 'LaserHairRemoval', },
      { name: 'SkinTreatments', NavbarPath: 'SkinTreatments' },
      { name: 'CosmeticInjections ', NavbarPath: 'COSMETIC INJECTIONS' },
      { name: 'Promo', NavbarPath: 'Promo' },
      { name: 'Procedure', NavbarPath: 'Procedure' }
    ],
    HNbD: [
      { name: 'OurStory', HeaderNavbarPath: 'OurStory' },
      { name: 'MedicalTeam', HeaderNavbarPath: 'MedicalTeam' },
      { name: 'COVID Info', HeaderNavbarPath: 'COVID Info' },
      { name: 'Users', HeaderNavbarPath: 'Users' },
      { name: 'MyProfile', HeaderNavbarPath: 'MyProfile' }
    ],
  }
}
const ManePagereducer = (state = initialState) => {
  let stateCopy = { ...state };
  return stateCopy;
}
export default ManePagereducer;