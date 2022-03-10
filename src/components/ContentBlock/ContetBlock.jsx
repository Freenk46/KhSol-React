import { Routes, Route } from 'react-router-dom';
import Form from '../../authRegister/Form';
import RegisterProcedure from '../RegisterProcedure/RegisterProcedure';
import UsersConteiner from '../Users/UsersConteiner';
import ProfileConteiner from '../Profile/ProfileConteiner';
import SkinTreatmentsConteiner from '../SkinTreatments/SkinTreatmentsConteiner';
import FormAuth from '../Login/FormAuth';
import CosmeticInjectionsConteiner from '../CosmeticInjections/CosmeticInjectionsConteiner';
import SkinCareConteiner from '../SkinCare/SkinCareConteiner';
import SkinConcernsConteiner from '../SkinCare/SkinConcerns/SkinConcernsConteiner';
import HomeConteiner from '../Home/HomeConteiner';
import LaserHairRemovalConteiner from '../LaserHairRemoval/LaserHairRemovalConteiner';
import MyProfileCartConteiner from '../Profile/MyProfileCart/MyProfileCartConteiner';
import MyProfileProcedureConteiner from '../Profile/MyProfileProcedures/MyProfileProcedureConteiner';
import MyProfileSettingsConteiner from '../Profile/MyProfileSettings/MyProfileSettingsConteiner';
import MyProfileMessageConteiner from '../Profile/MyProfileMessage/MyProfileMessageConteiner';
import MenConteiner from '../LaserHairRemoval/Men/MenConteiner';
import WomenConteiner from '../LaserHairRemoval/Women/WomenConteiner';
import AdminConteiner from '../Admin/AdminConteiner';



const COntentBLock = (props) => {
  return (
    <Routes>
      <Route path='/ADMIN' element={<AdminConteiner />} />

      <Route path='/MyProfile/Cart' element={<MyProfileCartConteiner />} />
      <Route path='/MyProfile/MyProcedure' element={<MyProfileProcedureConteiner />} />
      <Route path='/MyProfile/Setting' element={<MyProfileSettingsConteiner />} />
      <Route path='/MyProfile/Chat' element={<MyProfileMessageConteiner />} />

      <Route path="/SkinTreatments" element={< SkinTreatmentsConteiner />} />
      <Route path="/Register" element={< Form />} />
      <Route path='/profile' element={<ProfileConteiner />} />
      <Route path='/profile/:userId' element={<ProfileConteiner />} />
      <Route path="/Users" element={<UsersConteiner />} />
      <Route path="/Home" element={<HomeConteiner />} />
      <Route path="/Procedure" element={<RegisterProcedure />} />
      <Route path="/Login" element={<FormAuth />} />
      <Route path="/CosmeticInjections" element={<CosmeticInjectionsConteiner />} />
      <Route path="/SkinCare" element={<SkinCareConteiner />} />
      <Route path="/SkinConcerns" element={<SkinConcernsConteiner />} />

      <Route path="/LaserHairRemoval" element={<LaserHairRemovalConteiner />} />
      <Route path="/LaserHairRemoval/Men" element={< MenConteiner />} />
      <Route path="/LaserHairRemoval/Women" element={< WomenConteiner />} />
    </Routes >
  );
}
export default COntentBLock;