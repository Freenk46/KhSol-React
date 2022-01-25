let initialState = {

   Poster: [
      {
         title: 'The perfect gift lives here',
         Text: 'More treatments. Best results.',
         img: 'https://www.laserclinics.co.uk/contentassets/3e94a0031bf7456da2e5272c7c8dd16b/lc_web-banner_1400x600px_skin-concern.png?width=1920&mode=max'
      },

   ],
   About: [
      {
         title: 'About Cosmetic Injectables',
         Text: "Laser Clinics is the largest cosmetic clinic company globally and we have the best medical-grade, industry-leading technology and the experience we need to get the best results for our clients.Leaders in Laser Hair Removal, Cosmetic Injectables, and Skin Treatments, we offer complimentary consultations to deliver on your aesthetic goals.",
         img: 'https://www.laserclinics.co.uk/globalassets/image-6-605x400-1.jpg',
      },
   ],
}


const HomeReducer = (state = initialState) => {
   return {
      ...state
   };
}
export default HomeReducer;