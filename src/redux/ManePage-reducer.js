let initialState = {
  ManePage: {
    NbD: [
      { name: 'LaserHairRemoval', NavbarPath: 'LaserHairRemoval', },
      { name: 'SkinCare', NavbarPath: 'SkinCare' },
      { name: 'CosmeticInjections ', NavbarPath: 'CosmeticInjections' },
      { name: 'Promo', NavbarPath: 'Promo' },
      { name: 'Procedure', NavbarPath: 'Procedure' },
      { name: 'Register', NavbarPath: 'Register' },
    ],
    HNbD: [
      { name: 'OurStory', HeaderNavbarPath: 'OurStory' },
      { name: 'MedicalTeam', HeaderNavbarPath: 'MedicalTeam' },
      { name: 'COVID Info', HeaderNavbarPath: 'COVID Info' },
      { name: 'Users', HeaderNavbarPath: 'Users' },
      { name: 'MyProfile', HeaderNavbarPath: 'MyProfile' }
    ],
    img: 'https://i.pinimg.com/736x/cf/04/c1/cf04c1f86d5d9920131276f4db7ea7bf.jpg',
  }
}
const ManePagereducer = (state = initialState) => {
  let stateCopy = { ...state };
  return stateCopy;
}
export default ManePagereducer;