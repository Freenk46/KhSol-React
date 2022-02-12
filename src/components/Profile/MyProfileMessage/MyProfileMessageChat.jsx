import s from './MyProfileMessageChat.module.css';
import React from 'react';
import DialogItem from './DialogItem';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../../Common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);
const MyProfileMessageChat = (props) => {


   let DialogData = props.Dialog.map((E) =>
      <DialogItem Message={E.Message} img={props.img}
      />);
   let addNewMessage = (values) => {
      props.AddNewMessage(values.NewMessage);
   };
   return (
      <div className={s.Chat_wrapper}>
         <div className={s.Chat_Header} >
            <div className={s.Header_img_conteiner}>
               <img className={s.Header_img} src={props.img} alt=''></img>
            </div>
            <div className={s.Header_Name_conteiner}>
               <h4 className={s.Header_Name}>KhSol</h4>
               <h5 className={s.Header_status}>online</h5>
            </div>
         </div>
         <div className={s.Chat_conteiner}>
            {DialogData}
         </div>
         <div className={s.Chat_Footer} >
            <div className={s.Profile_logo_conteiner} >
               <img className={s.Profile_logo} src={props.Profile.photos.large != null ? props.Profile.photos.large : props.img} alt="large"></img>
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage} />
         </div>

      </div >

   );
}
const AddNewMessageForm = (props) => {
   return (
      <form className={s.Chat_Footer} onSubmit={props.handleSubmit}>
         <div className={s.Footer_input_conteiner}>
            <Field
               placeholder={"Message"}
               component={Textarea}
               validate={[required, maxLength50]}
               name={"NewMessage"}
               className={s.Footer_input}
            />
         </div>
         <div className={s.Footer_btn_conteiner}>
            <button className={s.btn_send}>
               send
            </button>
         </div>
      </form >
   );
};
const AddMessageReduxForm = reduxForm({ form: 'NewMessage' })(AddNewMessageForm);
export default MyProfileMessageChat;