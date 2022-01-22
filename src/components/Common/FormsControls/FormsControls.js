import React from "react"
import s from './FormsControls.module.css'
const FormControl = ({ input, meta, child, ...props }) => {
   const hesError = meta.touched && meta.error;
   return (
      <div className={s.form_control + " " + (hesError ? s.error : "")}>
         <div>
            {props.children}
         </div>
         {hesError && <span>{meta.error}</span>}
         <span></span>
      </div>
   )
}

export const Textarea = (props) => {
   const { input, meta, child, ...restProps } = props;
   return (
      <FormControl  {...props} ><textarea {...input}  {...restProps}></textarea></FormControl>
   )
}
export const Input = (props) => {
   const { input, meta, child, ...restProps } = props;
   return (
      <FormControl  {...props} ><input {...input}  {...restProps}></input></FormControl>
   )
}