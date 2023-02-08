import React from 'react'
import ".././styles/product-detail.css";
import arrow from "../.././assets/image/arrow.png";
const Detail = () => {
  const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
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
            
            <div class="re-product ">
                 <h2 class="text">Related Product</h2>
            </div>
          </div>
    <section class="product-slider">
        <button class="pre-btn"><img src={arrow} alt=""/></button>
        <button class="nxt-btn"><img src={arrow} alt=""/></button>
        <div class="product-container">
            <div class="product-card">
                <div class="product-image">
                    
                    <img src="https://i.imgur.com/Dhebu4F.jpg" class="product-thumb" alt=""/>
                    
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-description">a short line about the cloth..</p>
                    <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                   
                    <img src="https://i.imgur.com/Dhebu4F.jpg" class="product-thumb" alt=""/>
                    
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-description">a short line about the cloth..</p>
                    <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    
                    <img src="https://i.imgur.com/Dhebu4F.jpg" class="product-thumb" alt=""/>
                    
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-description">a short line about the cloth..</p>
                    <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                   
                    <img src="https://i.imgur.com/Dhebu4F.jpg" class="product-thumb" alt=""/>
                    
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-description">a short line about the cloth..</p>
                    <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    
                    <img src="https://i.imgur.com/Dhebu4F.jpg" class="product-thumb" alt=""/>
                    
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-description">a short line about the cloth..</p>
                    <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    
                    <img src="https://i.imgur.com/Dhebu4F.jpg" class="product-thumb" alt=""/>
                    
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-description">a short line about the cloth..</p>
                    <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                   
                    <img src="https://i.imgur.com/Dhebu4F.jpg" class="product-thumb" alt=""/>
                   
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-description">a short line about the cloth..</p>
                    <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                    
                    <img src="https://i.imgur.com/Dhebu4F.jpg" class="product-thumb" alt=""/>
                    
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-description">a short line about the cloth..</p>
                    <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
                   
                    <img src="https://i.imgur.com/Dhebu4F.jpg" class="product-thumb" alt=""/>
                    
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-description">a short line about the cloth..</p>
                    <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">
            
                    <img src="https://i.imgur.com/Dhebu4F.jpg" class="product-thumb" alt=""/>
                 
                </div>
                <div class="product-info">
                    <h2 class="product-brand">brand</h2>
                    <p class="product-short-description">a short line about the cloth..</p>
                    <span class="price">$20</span><span class="actual-price">$40</span>
                </div>
            </div>
        </div>
    </section>
    
    </div>

    
    )
}

export default Detail;