let initialState = {
  LaserHairRemoval: {
    PricNavbarDate: [
      { name: 'MostPopular', PricNavbarPath: 'MostPopular', Followed: 'False' },
      { name: 'Face&Neck', PricNavbarPath: 'FaceNeck', Followed: 'False' },
      { name: 'UpperBody', PricNavbarPath: 'UpperBody', Followed: 'False' },
      { name: 'LowerBody', PricNavbarPath: 'LowerBody', Followed: 'False' },
      { name: 'FullBody', PricNavbarPath: 'FullBody', Followed: 'False' }
    ],
    MostPopularProcedurePric: [
      { id: '1', Procedure: 'Chin', NavbarClass: 'MostPopular', Pric: '23$', Followed: 'False' },
      { id: '2', Procedure: 'Ears', NavbarClass: 'MostPopular', Pric: '23$', Followed: 'False' },
      { id: '3', Procedure: 'UpperBody', NavbarClass: 'MostPopular', Pric: '23$', Followed: 'False' },
      { id: '4', Procedure: 'LowerBody', NavbarClass: 'MostPopular', Pric: '23$', Followed: 'False' },
      { id: '5', Procedure: 'FullBody', NavbarClass: 'MostPopular', Pric: '23$', Followed: 'False' },
      { id: '6', Procedure: 'LowerBody', NavbarClass: 'MostPopular', Pric: '23$', Followed: 'False' },
      { id: '7', Procedure: 'LowerBody', NavbarClass: 'MostPopular', Pric: '23$', Followed: 'False' },
    ],
    UpperBodyProcedurePric: [
      { id: '1', Procedure: 'Underarms', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' },
      { id: '2', Procedure: 'Naval', NavbarClass: 'UpperBody', Pric: '23$' },
      { id: '3', Procedure: 'Laser Hair Removal Snail Trail', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' },
      { id: '4', Procedure: 'Areola', NavbarClass: 'UpperBody', Pric: '23$ ', Followed: 'False' },
      { id: '5', Procedure: 'Neck (Front or Back)', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' },
      { id: '6', Procedure: 'Hands & Fingers', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' },
      { id: '7', Procedure: 'Female Stomach', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' },
      { id: '8', Procedure: 'Female Shoulders', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' },
      { id: '9', Procedure: 'Female 1/4 Arms', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' },
      { id: '10', Procedure: 'Male 1/4 Arms', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' },
      { id: '11', Procedure: 'Female 1/4 Back', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' },
      { id: '12', Procedure: 'Female 1/2 Arms', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' },
      { id: '13', Procedure: 'Female Chest', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' },
      { id: '14', Procedure: 'Male 1/4 Back', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' },
      { id: '15', Procedure: 'Female 1/2 Back', NavbarClass: 'UpperBody', Followed: 'False' },
      { id: '16', Procedure: 'Male Chest', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' },
      { id: '17', Procedure: 'Male 1/2 Arms', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' },
      { id: '18', Procedure: 'Male Shoulders', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' },
      { id: '19', Procedure: 'Male 1/2 Back', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' },
      { id: '20', Procedure: 'Female Full Arms', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' },
      { id: '21', Procedure: 'Male Full Arms', NavbarClass: 'UpperBody', Pric: '23$' },
      { id: '22', Procedure: 'Male Chest & Stomach', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' },
      { id: '23', Procedure: 'Female 3/4 Back', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' },
      { id: '24', Procedure: 'Female Back', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' },
      { id: '25', Procedure: 'Back & Shoulders', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' },
      { id: '26', Procedure: 'Male Back', NavbarClass: 'UpperBody', Pric: '23$' },
      { id: '27', Procedure: 'Male Back & Shoulders', NavbarClass: 'UpperBody', Pric: '23$', Followed: 'False' }
    ],
    FaceNeckProcedurePric: [
      { id: '1', Procedure: 'Chin', NavbarClass: 'FaceNeck', Pric: '23$', Followed: 'False' },
      { id: '2', Procedure: 'Ears', NavbarClass: 'FaceNeck', Pric: '23$', Followed: 'False' },
      { id: '3', Procedure: 'Eyebrows', NavbarClass: 'FaceNeck', Pric: '23$', Followed: 'False' },
      { id: '4', Procedure: 'Lip', NavbarClass: 'FaceNeck', Pric: '23$' },
      { id: '5', Procedure: 'LipChin', NavbarClass: 'FaceNeck', Pric: '23$', Followed: 'False' },
      { id: '6', Procedure: '1/2 Face (forehead to nose OR upper lip to chin)', NavbarClass: 'FaceNeck', Pric: '23$', Followed: 'False' },
      { id: '7', Procedure: 'Full Face', NavbarClass: 'FaceNeck', Pric: '23$', Followed: 'False' },
      { id: '8', Procedure: 'Male Facial Hair Sculpting', PricNavbarPath: 'FaceNeck', Pric: '23$', Followed: 'False' },
      { id: '9', Procedure: 'Face & Neck', NavbarClass: 'FaceNeck', Pric: '23$', Followed: 'False' },
    ],
    LowerBodyProcedurePric: [

      { id: '1', Procedure: 'Peri Anal', NavbarClass: 'LowerBody', Pric: '23$', Followed: 'False' },
      { id: '2', Procedure: 'Fingers & Toes', NavbarClass: 'LowerBody', Pric: '23$', Followed: 'False' },
      { id: '3', Procedure: 'Bikini', NavbarClass: 'LowerBody', Pric: '23$', Followed: 'False' },
      { id: '4', Procedure: 'Feet & Toes', NavbarClass: 'LowerBody', Pric: '23$', Followed: 'False' },
      { id: '5', Procedure: 'Female Brazilian', NavbarClass: 'LowerBody', Pric: '23$', Followed: 'False' },
      { id: '6', Procedure: 'Female Brazilian & Underarms', NavbarClass: 'LowerBody', Pric: '23$', Followed: 'False' },
      { id: '7', Procedure: 'Buttocks', NavbarClass: 'LowerBody', Pric: '23$', Followed: 'False' },
      { id: '8', Procedure: '1/4 Legs', NavbarClass: 'LowerBody', Pric: '23$', Followed: 'False' },
      { id: '9', Procedure: 'Male Brazilian', NavbarClass: 'LowerBody', Pric: '23$', Followed: 'False' },
      { id: '10', Procedure: '1/2 Legs', NavbarClass: 'LowerBody', Pric: '23$', Followed: 'False' },
      { id: '11', Procedure: 'Female Full Legs', NavbarClass: 'LowerBody', Pric: '23$', Followed: 'False' },
      { id: '12', Procedure: 'Female 1/2 Legs + Brazilian & Underarms', NavbarClass: 'LowerBody', Pric: '23$', Followed: 'False' },
      { id: '13', Procedure: 'Full Arms, Brazilian & Underarms', NavbarClass: 'LowerBody', Pric: '23$', Followed: 'False' },
      { id: '14', Procedure: 'Female Full Legs, Brazilian & Underarms', NavbarClass: 'LowerBody', Pric: '23$', Followed: 'False' },
      { id: '15', Procedure: 'Male Full Legs', NavbarClass: 'LowerBody', Pric: '23$', Followed: 'False' }
    ],
    FullBodyProcedurePric: [

      { id: '1', Procedure: 'Female Full Body', NavbarClass: 'FullBody', Pric: '23$', Followed: 'False' },
      { id: '2', Procedure: 'Female Full Body (excludes back & shoulders)', NavbarClass: 'FullBody', Pric: '23$', Followed: 'False' },
      { id: '3', Procedure: 'Male Full Body', NavbarClass: 'FullBody', Pric: '23$', Followed: 'False' }
    ],
    PathMen: ['Men'],
    PathWomen: ['Women'],
    InformationNet: {
      text1: ['Our experienced therapists will take your skin and hair type into account before creating a personalised treatment plan.'],
      text2: ['Our lasers use a large treatment spot size which allows multiple hair follicles to be targeted at the same time. '],
      text3: ['The Candela GentleLASE Pro is designed to work for clients with dark hair and lighter skin, while the GentleYAG Pro works best on a darker skin tone.'],
      text4: ['With each session, hair is reduced. We recommend an initial course of 6-12 treatments, spaced 4 weeks apart (depending on area and skin tone).'],
      Mimg1: ['https://www.laserclinics.co.uk/globalassets/mens-laser-after-359x318-1.jpg'],
      Mimg2: ['https://www.laserclinics.co.uk/globalassets/mens-laser-consult-359x318.jpg'],
      Mimg3: ['https://www.laserclinics.co.uk/globalassets/mens-laser-359x318.jpg'],
      Wimg1: ['https://www.laserclinics.co.uk/contentassets/a9e6051552e242ba8ca6513dc81ee148/legs-11-359x318.jpg'],
      Wimg2: ['https://www.laserclinics.co.uk/contentassets/e1922bf74756449a9f55c9e9fbbf0c37/legs-10-359x318.jpg'],
      Wimg3: ['https://www.laserclinics.co.uk/contentassets/5cb5d3490dd54c989448e28611013522/ladies-laser-final.jpg'],
    }
  },
}
const LaserHairRemovalreducer = (state = initialState) => {
  let stateCopy = { ...state };
  return stateCopy;
}
export default LaserHairRemovalreducer;