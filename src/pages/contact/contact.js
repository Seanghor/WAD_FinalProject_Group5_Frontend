import React from 'react'
import ".././styles/contact.css";

const Contact = () => {
  return (
    <div class="container">
    <div class="item">
        <div class="text">
            <h1>Get Im Touch With Us</h1>
            <p class="text-p">For More Information About Our Product & Services.Please Feel Free To Drop Us An Email. </p> <p class="text-p"> Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div class="row ">
            <div class="col">
                <div class="item">
                    <h5>Address</h5>
                    <p>Kirirom Mountian</p>
                </div>
                <div class="item">
                    <h5>Phone</h5>
                    <p>+855 123 4567</p>
                </div>
                <div class="item">
                    <h5>Working time</h5>
                    <p>Mon-Fri : 9:00-6:00</p>
                </div>
            </div>
            <div class="col">
                <div class="input-text">
                    <form>
                        <div class="form-group ">
                            <label for="name" >Your Name</label>
                            <input type="text" class="form-control " placeholder="Enter Name" />  
                        </div>
                        <div class="form-group ">
                            <label for="email">Email</label>
                            <input type="email" class="form-control "  ria-describedby="emailHelp"  placeholder="email" />
                        </div>
                        <div class="form-group ">
                            <label for="email">Subject</label>
                            <input type="text" class="form-control"  placeholder="Optional" />
                        </div>
                        <div class="form-group  ">
                            <label for="email">Message</label>
                            <input type="text" class="form-control "   placeholder="email" />
                        </div>
    
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
        </div>
    </div>  
</div>
  )
}

export default Contact