import React from 'react';
import './Form.css';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { Textarea } from '../Common/FormsControls/FormsControls';
import s from '../Common/FormsControls/FormsControls.module.css';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
const maxLengthCreator9 = maxLengthCreator(50);
const Formlogin = (props) => {
   return (
      <form className='form' onSubmit={props.handleSubmit}>
         <div className='form-inputs'>
            <label className='form-label'>login</label>
            <Field
               className='form-input'
               placeholder={"Email"}
               component={Textarea}
               name={"email"}
               validate={[required, maxLengthCreator9]}
            />
         </div>
         <div className='form-inputs'>
            <label className='form-label'>Password</label>
            <Field
               className='form-input'
               placeholder={"Password"}
               component={Textarea}
               name={"password"}
               type={"password"}
               validate={[required, maxLengthCreator9]}
            />
         </div>
         <div className="form-inputs">
            <Field
               type={"checkbox"}
               className='form-input'
               component={"input"}
               name={"rememberMe"} />

            <label className='form-label'>remember Me</label>
         </div>
         <button className='form-input-btn'>
            login
         </button>
         <span className='form-input-login'>
            have not an account? Login<a href='#'>here</a>
         </span>
      </form>
   );
};
const LoginReduxForm = reduxForm({ form: 'login' })(Formlogin)
const Login = (props) => {
   const onSubmit = (formData) => {

      props.login(formData.email, formData.password, formData.rememberMe);
   }
   if (props.isAuth) {
      return <Navigate to={"/MyProfile/Cart"} />
   }
   return (<LoginReduxForm onSubmit={onSubmit} />
   )
}
const mapStateToProps = (state) => ({
   isAuth: state.authReducer.isAuth,
})


export default connect(mapStateToProps, { login })(Login);
