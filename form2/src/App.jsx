import { useState } from "react";
import "/src/App.css";
import axios from "axios";

function App(){

const [values, setvalues]= useState({
  firstname:'',
  lastname:'',
  email:'',
  gender:'',
  contact:'',
  subject:'',
  resume:'',
  url:'',
  about:'',
})

const handleChange = (e) => {
  setvalues ({...values,  [e.target.name]:[e.target.value]})
}

const handleSubmit = (e) =>{
  e.preventDefault()
  console.log(values)


}

const ResetFun =() =>{
  setvalues({firstname:'',lastname:'',email:''})
}

return(


<div className="container">
  <h1>FORM IN REACT</h1>

  <form onSubmit={handleSubmit}>
<label htmlFor="first name">First Name</label>
<input type="text" placeholder="enter first name"  name="firstname"
onChange={(e) => handleChange(e)} required value={values.firstname}/>


<label htmlFor="last name">Last Name</label>
<input type="text" placeholder="enter last name"  name="lastname"
onChange={(e) => handleChange(e)} required   value={values.lastname}/>


<label htmlFor="email ">Email</label>
<input type="email" placeholder="enter email" name="email"
onChange={(e) => handleChange(e)} required  value={values.email}/>


<label htmlFor="contact">Contact</label>
<input type="text" placeholder="enter phone #"  name="contact"
onChange={(e) => handleChange(e)}/>


<label htmlFor="gender">Gender</label>
<input type="radio"  name="gender"
onChange={(e) => handleChange(e)}/>male
<input type="radio"  name="gender"
onChange={(e) => handleChange(e)}/>female
<input type="radio"  name="gender"
onChange={(e) => handleChange(e)}/>others


<label htmlFor="subject">Subject</label>
<select name="subject" id="subject"onChange={(e) => handleChange(e)}>
<option value="maths">Maths</option>
<option value="physics">Physics</option>
<option value="chemistry">Chemistry</option>
<option value="english">English</option>

</select>


<label htmlFor="resume">Resume</label>
<input type="file" placeholder="enter your resume"  name="resume"onChange={(e) => handleChange(e)}/>



<label htmlFor="images">Images</label>
<input type="text" placeholder="enter image URL"  name="url"onChange={(e) => handleChange(e)}/>


<label htmlFor="about">About</label>
<textarea name="about" id="about" cols="30"  rows="10" 
onChange={(e) => handleChange(e)} placeholder="enter description"></textarea>

<button type="submit"> submit</button>

<button type="button"  onClick={ResetFun}>reset</button>

  </form>

</div>

)
}
export default App;