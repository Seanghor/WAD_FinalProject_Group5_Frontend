import React from 'react'
import '.././styles/signup.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [email,setEmail]=useState("")
  const [password,setPassword] =useState("");
  const [work,setWork] = useState("");
  const [city,setCity] = useState("");
  const [zip,setZip] = useState("");
  const [province,setProvince] =useState("");
  const [street,setStreet]=useState("");
  return (
    <div className="container">
      <div className="col-md-6 register">
        <h1>Register</h1>
        <div className="text">
          <p>let ‘s get  you all set up so you can verify your account  and begin 
            <br/>setting up  your profile.
          </p>
        </div>
      </div>
        
      <div className="">
        
        <div className="row ">
          {/* Left side form  */}
          <div className="col">
            <div className="first_name">
              <p>First Name</p>
              <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="sothea" className="item" />
            </div>
            <div className="phone_number">
              <p>Email</p>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="team5@kit.com" className="item"  />
            </div>
            <div className="password">
              <p>Street </p>
              <input type="text" value={street} onChange={(e)=>setStreet(e.target.value)} placeholder="road 4" className="item" />
            </div> 
            <div className="city">
              <p>City </p>
              <input type="text " value={city} onChange={(e)=>setCity(e.target.value)} placeholder="Phnom Penh" className="item" />
            </div> 
            <div className="province">
              <p>Province</p>
              <input type="text " value={province} onChange={(e)=>setProvince(e.target.value)} placeholder="Phnom Penh" className="item" />
            </div> 
          </div>

          {/* Right side form */}
          <div className="col">
            <div className="last_name">
              <p>Phone number</p>
              <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="1234" className="item" />
            </div>
            <div className="email">
              <p>Password</p>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="1@#$456" className="item" />
            </div>
            <div className="confirm_password">
              <p>Work</p>
              <input type="text" value={work} onChange={(e)=>setWork(e.target.value)} placeholder="Student" className="item" />
            </div>
            <div className="confirm_password">
              <p>Zip Code</p>
              <input type="text" value={zip} onChange={(e)=>setZip(e.target.value)} placeholder="1234@14" className="item" />
            </div>
          </div>
        </div>
        
        {/* Text under Left side form */}
        <div className="text_under">
          <div className="tick1">
            <input type="checkbox" className='checkbox' />
            <label htmlFor="text"> Yes, This is my personal email.</label>
          </div>
          <div className="tick2">
              <input type="checkbox" className='checkbox' />
              <label htmlFor="text"> I agree with the terms <a href="/">private policy.</a></label>
          </div>
        </div>

        <div className="col-md-6 btn">
          <button  type="submit" onClick={()=> {}}>Sign Up</button>
          
        </div>
        <p>Already have an Account ? <Link to="/signin">Login</Link></p>
          
      </div>
      
        
    </div>
  )
}

export default Signup