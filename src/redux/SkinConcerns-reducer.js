let initialState = {
   SkinConcerns: {
      Poster: [
         {
            title: 'Get that glow',
            Text: 'Whatever your skin concern, we have the experience, knowledge, and professional Skin Treatments to deliver tailored results.',
            img: 'https://www.laserclinics.co.uk/contentassets/3e94a0031bf7456da2e5272c7c8dd16b/lc_web-banner_1400x600px_skin-concern.png?width=1920&mode=max',
         },
      ],
      About: [
         {
            title: 'About Our Skin Treatments',
            Text: "Whatever your skin concern, we have the experience, knowledge, and professional Skin Treatments to deliver the best results. From acne to pigmentation, fine lines to stretch marks, enlarged pores to Rosacea, and everything in-between, our experienced Therapists will design a tailored treatment plan to deliver on your skin goals.",
            img: 'https://www.laserclinics.co.uk/contentassets/2d586e8272244a249ea31591d2657ea6/aw-icon-banner.png',
         },
      ],
   },
}

const SkinConcernsReducer = (state = initialState) => {
   let stateCopy = { ...state };
   return stateCopy;
}
export default SkinConcernsReducer;