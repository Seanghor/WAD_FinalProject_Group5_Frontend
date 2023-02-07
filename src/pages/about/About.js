import React from 'react'
import ".././styles/about.css";
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div class="containter">
  
        
    <div class="team row ">

      <div class="col-md-4 col-12 text-center">
          
            <img src="../.././assets/image/sotheaban.png" class="img-fluid rounded-circle w-50 p-4" alt=""/>
                <div class="card mr-2 d-inline-block shadow-lg">
                    <div class="card-img-top">
                      <img src="../assets/UI-face-3.jpg" class="img-fluid border-radius p-4" alt="" />
                    </div>
                    <div class="card-body">
                    
                      <Link to="/sothea">
                         <h3 class="card-title">Ban Sothea</h3> 
                      </Link>

                          <p class="card-text">
                          Hello, everyone! I'm from KIT.
                          </p>
                          <a href="#" class="text-secondary text-decoration-none">Frontend Developer</a>
                          <p class="text">Software Engineering</p>
                    </div>
                  </div>
          
      </div>
      <div class="col-md-4 col-12">
          <div id="carouselExampleControls" class="carousel slide " data-ride="carousel">
              <div class="carousel-inner text-center">
                <div class="carousel-item active">
                  <div class="card mr-2 d-inline-block shadow">
                    <div class="card-img-top">
                      <img src="../.././assets/image/sotheaban.png" class="img-fluid rounded-circle w-50 p-4" alt=""/>
                    </div>
                    <div class="card-body">
                      <Link to="/kimsoure">
                        <h3 class="card-title">Kimsoure</h3>
                      </Link>
                      <p class="card-text">
                        Hello, everyone! I'm from KIT.
                      </p>
                      <a href="#" class="text-secondary text-decoration-none">Backend Developer</a>
                      <p class="text">Software Engineering </p>
                    </div>
                  </div>
                </div> 
                
              </div>
           </div>
       </div>
      <div class="col-md-4 col-12 text-center">
          <div class="card mr-2 d-inline-block shadow-lg">
              <div class="card-img-top">
                <img src="../assets/UI-face-4.jpg" class="img-fluid border-radius p-4" alt=""/>
              </div>
              <div class="card-body">
                  <Link to="/seanghor">
                    <h3 class="card-title">Seanghor</h3>
                  </Link>
                  <p class="card-text">
                Hello, everyone! I'm from KIT. </p>
                <a href="#" class="text-secondary text-decoration-none ">Backend Developer</a>
                <p class="text">Software Engineering</p>
              </div>
            </div>
      
    </div>
  </div>
</div>
  )
}

export default About
