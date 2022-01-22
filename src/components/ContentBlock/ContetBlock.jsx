import { Routes, Route } from 'react-router-dom';
import Form from '../../SignUp/Form';
import Home from '../Navbar/NavbarComponents/Home/Home';
import LaserHairRemoval from '../Navbar/NavbarComponents/LaserHairRemoval/LaserHairRemoval';
import Men from '../Navbar/NavbarComponents/LaserHairRemoval/Men/Men';
import Women from '../Navbar/NavbarComponents/LaserHairRemoval/Women/Women';
import RegisterProcedure from '../RegisterProcedure/RegisterProcedure';
import UsersConteiner from '../Navbar/NavbarComponents/Users/UsersConteiner';
import ProfileConteiner from '../Profile/ProfileConteiner';
import MyProfileConteiner from '../Profile/MyProfileConteiner';
import SkinTreatmentsConteiner from '../SkinTreatments/SkNavbarConteiners/SkinTreatmentsConteiner';
import MicrodermabrasionConteiner from '../SkinTreatments/SkNavbarConteiners/MicrodermabrasionConteiner';
import RejuvapenConteiner from '../SkinTreatments/SkNavbarConteiners/RejuvapenConteiner';
import LEDlightTherapyConteiner from '../SkinTreatments/SkNavbarConteiners/LEDlightTherapyConteiner';
import HydraFacialConteiner from '../SkinTreatments/SkNavbarConteiners/HydraFacialConteiner';
import CosmeticGradePeelsConteiner from '../SkinTreatments/SkNavbarConteiners/CosmeticGradePeelsConteiner';
const COntentBLock = (props) => {
  return (
    <Routes>
      <Route path='/MyProfile' element={<MyProfileConteiner />} />
      <Route path='/profile/:userId' element={<ProfileConteiner />} />
      <Route path="/Users" element={<UsersConteiner />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Procedure" element={<RegisterProcedure />} />
      <Route path="/LaserHairRemoval" element={<LaserHairRemoval />} />

      <Route path="/LaserHairRemoval/Men" element={<Men
        text1={props.text1} text2={props.text2} text3={props.text3} text4={props.text4}
        Mimg1={props.Mimg1} Mimg2={props.Mimg2} Mimg3={props.Mimg3}
        Path={props.PathMen} LHRPricNavbarDate={props.LHRPricNavbarDate} state={props.MostPopularProcedurePric} />} />
      <Route path="/LaserHairRemoval/Men/UpperBody" element={<Men
        text1={props.text1} text2={props.text2} text3={props.text3} text4={props.text4}
        Mimg1={props.Mimg1} Mimg2={props.Mimg2} Mimg3={props.Mimg3}
        Path={props.PathMen} LHRPricNavbarDate={props.LHRPricNavbarDate} state={props.UpperBodyProcedurePric} />} />
      <Route path="/LaserHairRemoval/Men/MostPopular" element={<Men
        text1={props.text1} text2={props.text2} text3={props.text3} text4={props.text4}
        Mimg1={props.Mimg1} Mimg2={props.Mimg2} Mimg3={props.Mimg3}
        Path={props.PathMen} LHRPricNavbarDate={props.LHRPricNavbarDate} state={props.MostPopularProcedurePric} />} />
      <Route path="/LaserHairRemoval/Men/FaceNeck" element={<Men
        text1={props.text1} text2={props.text2} text3={props.text3} text4={props.text4}
        Mimg1={props.Mimg1} Mimg2={props.Mimg2} Mimg3={props.Mimg3}
        Path={props.PathMen} LHRPricNavbarDate={props.LHRPricNavbarDate} state={props.FaceNeckProcedurePric} />} />
      <Route path="/LaserHairRemoval/Men/LowerBody" element={<Men
        text1={props.text1} text2={props.text2} text3={props.text3} text4={props.text4}
        Mimg1={props.Mimg1} Mimg2={props.Mimg2} Mimg3={props.Mimg3}
        Path={props.PathMen} LHRPricNavbarDate={props.LHRPricNavbarDate} state={props.LowerBodyProcedurePric} />} />
      <Route path="/LaserHairRemoval/Men/FullBody" element={<Men
        text1={props.text1} text2={props.text2} text3={props.text3} text4={props.text4}
        Mimg1={props.Mimg1} Mimg2={props.Mimg2} Mimg3={props.Mimg3}
        Path={props.PathMen} LHRPricNavbarDate={props.LHRPricNavbarDate} state={props.FullBodyProcedurePric} />} />

      <Route path="/LaserHairRemoval/Women" element={<Women
        text1={props.text1} text2={props.text2} text3={props.text3} text4={props.text4}
        Wimg1={props.Wimg1} Wimg2={props.Wimg2} Wimg3={props.Wimg3}
        Path={props.PathWomen} LHRPricNavbarDate={props.LHRPricNavbarDate} state={props.MostPopularProcedurePric} />} />
      <Route path="/LaserHairRemoval/Women/UpperBody" element={<Women
        text1={props.text1} text2={props.text2} text3={props.text3} text4={props.text4}
        Wimg1={props.Wimg1} Wimg2={props.Wimg2} Wimg3={props.Wimg3}
        Path={props.PathWomen} LHRPricNavbarDate={props.LHRPricNavbarDate} state={props.UpperBodyProcedurePric} />} />
      <Route path="/LaserHairRemoval/Women/MostPopular" element={<Women
        text1={props.text1} text2={props.text2} text3={props.text3} text4={props.text4}
        Wimg1={props.Wimg1} Wimg2={props.Wimg2} Wimg3={props.Wimg3}
        Path={props.PathWomen} LHRPricNavbarDate={props.LHRPricNavbarDate} state={props.MostPopularProcedurePric} />} />
      <Route path="/LaserHairRemoval/Women/FaceNeck" element={<Women
        text1={props.text1} text2={props.text2} text3={props.text3} text4={props.text4}
        Wimg1={props.Wimg1} Wimg2={props.Wimg2} Wimg3={props.Wimg3}
        Path={props.PathWomen} LHRPricNavbarDate={props.LHRPricNavbarDate} state={props.FaceNeckProcedurePric} />} />
      <Route path="/LaserHairRemoval/Women/LowerBody" element={<Women
        text1={props.text1} text2={props.text2} text3={props.text3} text4={props.text4}
        Wimg1={props.Wimg1} Wimg2={props.Wimg2} Wimg3={props.Wimg3}
        Path={props.PathWomen} LHRPricNavbarDate={props.LHRPricNavbarDate} state={props.LowerBodyProcedurePric} />} />
      <Route path="/LaserHairRemoval/Women/FullBody" element={<Women
        text1={props.text1} text2={props.text2} text3={props.text3} text4={props.text4}
        Wimg1={props.Wimg1} Wimg2={props.Wimg2} Wimg3={props.Wimg3}
        Path={props.PathWomen} LHRPricNavbarDate={props.LHRPricNavbarDate} state={props.FullBodyProcedurePric} />} />

      <Route path="/SkinTreatments" element={<SkinTreatmentsConteiner />} />
      <Route path="/SkinTreatments/Microdermabrasion" element={<MicrodermabrasionConteiner />} />
      <Route path="/SkinTreatments/Rejuvapen" element={<RejuvapenConteiner />} />
      <Route path="/SkinTreatments/LEDlightTherapy" element={<LEDlightTherapyConteiner />} />
      <Route path="/SkinTreatments/HydraFacial" element={<HydraFacialConteiner />} />
      <Route path="/SkinTreatments/CosmeticGradePeels" element={<CosmeticGradePeelsConteiner />} />

      <Route path="/sign-up" element={<Form state={props.PricNavbarDate} />} />

    </Routes>
  );
}
export default COntentBLock;