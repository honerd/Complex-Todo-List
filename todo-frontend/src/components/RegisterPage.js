import React, { useState } from 'react'
import "../css/register.css"
import { Form } from 'react-router-dom'
import image from '../images/backgroundimage.jpg'




function RegisterPage() {

  const [formInput,setFormInput]=useState({
    name:"",
    email:"",
    password:"",
    confirm_password:""
  });

  function handleChange(event)
{
  const nextFormState={
    ...formInput,
    [event.target.name]:event.target.value
  }
  setFormInput(nextFormState);
  
}
 
  return (
    <>
    <div className="rightimage">
    </div>
    <div className="leftimage">
    </div>
    <div className="registerheading">
      Register
    </div>
    <div className="registerform">
      <form action="/home" method="post">
        <div className="form_part">Name <br/><input type="text" name="name" value={formInput.name} onChange={handleChange} /></div>
        <div className="form_part">Email<br/><input type="email" name="email" value={formInput.email} onChange={handleChange} /></div>
        <div className="form_part">Password<br/><input type="password" name="password" id="form_password" value={formInput.password} onChange={handleChange}/></div>
        <div className="form_part">Confirm Password<br/><input type="password" name="password" id="form_cpassword" value={formInput.confirm_password} onChange={handleChange}/></div>
      </form>
    </div>
    </>
  )
}

export default RegisterPage