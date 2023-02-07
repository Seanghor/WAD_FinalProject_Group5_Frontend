import React from 'react'
import ".././styles/product-detail.css";
const Detail = () => {
  return (
    <div class="container mt-5 mb-5">
        <div class="row d-flex justify-content-center">
            <div class="col-md-10">
                
                    <div class="row">
                        <div class="col-md-6">
                            <div class="images p-3">
                                <div class="text-center p-4"> <img id="main-image" src="https://i.imgur.com/Dhebu4F.jpg" width="250" /> </div>
                                <div class="thumbnail text-center"> <img onclick="change_image(this)" src="https://i.imgur.com/Rx7uKd0.jpg" width="70"/> <img onclick="change_image(this)" src="https://i.imgur.com/Dhebu4F.jpg" width="70"/> </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="product ">
                                <div class="mb-3"> 
                                    <h5 class="text-uppercase">Classic Pan</h5>
                                    <div class="price d-flex flex-row align-items-center"> <span class="act-price">$20</span>
                                        <div class="ml-2"> <small class="dis-price">$59</small> <span>40% OFF</span> </div>
                                    </div>
                                </div>
                                <div class="cart  align-items-center">
                                    <input type="text" class="quantity" placeholder="1"/>
                                    <button class="btn btn-danger text-uppercase ">Add to cart</button>
                                 </div>
                                 <h5 class=" mt-5">Product Details</h5>
                                <p class="about">Anodized to absorb, distribute and transfer heat evenly and efficiently, these two frying pans sautée mushrooms, fry eggs, caramelize onions and bake frittatas. Ergonomic handles provide a sturdy grip as you stir and flip. Oven-safe for versatility.

                                </p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="re-product ">
                 <h5 class="text">Related Product</h5>
            </div>
    </div>

    
    )
}

export default Detail;