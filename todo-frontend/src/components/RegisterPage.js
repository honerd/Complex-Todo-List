import React, { useState } from 'react'
import "../css/register.css"
import { Form } from 'react-router-dom'
import image from '../images/backgroundimage.jpg'
import axios from 'axios'

const baseUrl="http://localhost:5000/register";


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

const enterToDatabase=()=>
{
  console.log("enter to database called");
  axios.post(baseUrl,formInput).then(()=>{console.log("Yes this works")});
}

const check=()=>
{
  if(formInput.name===""||formInput.email===""||formInput.password===""||formInput.confirm_password==="")
  {
    alert("enter the details necessary")
  }
  if(formInput.password===formInput.confirm_password)
  {
    enterToDatabase();
  }
  else
  {
    alert("Wrong Password");
  }
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
      <form>
        <div className="form_part">Name <br/><input type="text" name="name" value={formInput.name} onChange={handleChange} /></div>
        <div className="form_part">Email<br/><input type="email" name="email" value={formInput.email} onChange={handleChange} /></div>
        <div className="form_part">Password<br/><input type="password" name="password" id="form_password" value={formInput.password} onChange={handleChange}/></div>
        <div className="form_part">Confirm Password<br/><input type="password" name="confirm_password" id="form_password" value={formInput.confirm_password} onChange={handleChange}/></div>
        <div className="submit_button"><button type="submit" onClick={check}>Submit</button></div>
      </form>
    </div>
    </>
  )
}

export default RegisterPage