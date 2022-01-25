let initialState = {
   Poster: [
      {
         title: 'Skin tailored to you',
         Text: 'Light up the room long after you’ve gone. Revitalise your skin by targeting any area – wrinkles, veins, scars, acne reduction, or simply create a more radiant complexion.',
         img: 'https://www.laserclinics.co.uk/contentassets/21b970d7360e442c969eca5196d66f23/v2-uk-ci--category-banner-1.png?width=1920&mode=max'
      },

   ],
   About: [
      {
         title: 'About Cosmetic Injectables',
         Text: "Thinking about Cosmetic Injectables? One of the most effective and result-driven anti-ageing treatments, Anti Wrinkle and Dermal Fillers are the non-invasive treatment option to rejuvenate and enhance your best features.  Laser Clinics is the largest aesthetic clinic company globally and our Medical Team of Doctors and Advanced Nurse Practitioners will provide a tailored treatment plan to you.",
         img: 'https://www.laserclinics.co.uk/contentassets/2d586e8272244a249ea31591d2657ea6/aw-icon-banner.png',
      },
   ],
   Columnas: [
      {
         title: 'Anti Wrinkle Injectables',
         Text: "Anti-wrinkle Injectables are a safe, effective, non-invasive Cosmetic Injectable treatment to reduce and prevent fine lines. Performed by our experienced team, Anti-Wrinkle Cosmetic Injectables produce natural-looking results, creating a refreshed and youthful look.",
         img: ' https://www.laserclinics.co.uk/contentassets/2ef1f22839db4e599edc659c2425a8a5/lips-icon-banner.png',
         DISCOMFORT: '...',
         DOWNTIME: 'No',
         PAIRWITH: 'Dermal Fillers',

      },
      {
         title: 'Dermal Fillers',
         Text: "Dermal Fillers are a non-invasive Cosmetic Injectables treatment used to add volume and structure to your face. Designed to refresh, lift and add symmetry to your face, Dermal Fillers can provide a rejuvenated, youthful, and natural appearance.",
         img: ' https://www.laserclinics.co.uk/contentassets/3d20614fc4d54bf49ba6f98338be3562/df-icon-banner-e0ae9b.png',
         DISCOMFORT: '...',
         DOWNTIME: 'No',
         PAIRWITH: 'Dermal Fillers',

      },
      {
         title: 'Lip Enhancements',
         Text: "Lips are a defining feature of your face, so it’s important that they’re well-balanced, symmetrical, and have great volume. Lip augmentation is created with lip injections and lip fillers, expertly performed by our team of Doctors and Advanced Nurse Practitioners.",
         img: 'https://www.laserclinics.co.uk/contentassets/2d586e8272244a249ea31591d2657ea6/aw-icon-banner.png',
         DISCOMFORT: '...',
         DOWNTIME: 'No',
         PAIRWITH: 'Dermal Fillers',
      },
   ],
}
const CosmeticInjectionsReducer = (state = initialState) => {

   return {
      ...state
   };
}
export default CosmeticInjectionsReducer;