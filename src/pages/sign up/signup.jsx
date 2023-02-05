import React from 'react'
import '.././styles/signup.css'
import { Link } from 'react-router-dom';

const signup = () => {
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
              <input type="text" placeholder="sothea" className="item" />
            </div>
            <div className="phone_number">
              <p>Phone Number</p>
              <input type="number" placeholder="01234567" className="item"  />
            </div>
            <div className="password">
              <p>Password</p>
              <input type="password" placeholder="1234@14" className="item" />
            </div> 
          </div>

          {/* Right side form */}
          <div className="col">
            <div className="last_name">
              <p>Last Name</p>
              <input type="text" placeholder="team5" className="item" />
            </div>
            <div className="email">
              <p>Email Address</p>
              <input type="email" placeholder="team4@gmail.com" className="item" />
            </div>
            <div className="confirm_password">
              <p>Confirm Password</p>
              <input type="password" placeholder="1234@14" className="item" />
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
              <label htmlFor="text"> I agree with the terms <li href="/">private policy.</li></label>
          </div>
        </div>

        <div className="col-md-6 btn">
          <button  type="submit">Sign Up</button>
          
        </div>
        <p>Already have an Account ? <Link to="/signin">Login</Link></p>
          
      </div>
      
        
    </div>
  )
}

export default signup