import React from 'react'
import "./testi.css"
import photo from "./bannerr.jpg"
import sell from "./buy.jpeg"
const test= ()=>{

    return(
        <div>
<div class="text-center ">

<img src={sell} class="img-fluid" alt="Responsive image"/>

 
</div>
<div class="page-scroll"></div>




<section id="features">
    <div class="row abc">
<div class="feature-box col-lg-4">
  <i class="icon  fas fa-check-circle fa-5x"></i>
  <h3>Easy to use.</h3>
  {/* <p>So easy to use, even your dog could do it.</p> */}

</div>
<div class="feature-box col-lg-4 ">
  <i class="icon fas fa-bullseye fa-5x"></i>
  <h3>Verified Accounts</h3>
  {/* <p>We have all the dogs, the greatest dogs.</p> */}

</div>
<div class="feature-box col-lg-4 ">
  <i class="icon  fas fa-heart fa-5x"></i>
  <h3>Guaranteed to work.</h3>
  {/* <p>Find the love of your dog's life or your money back.</p> */}

</div>
</div>
    
    
   
  </section>

 {/* <section id="testimonials">
    <div id="testimonials-carsol" class="carousel slide" data-bs-ride="carousel" data-ride="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <h2>I no longer have to sniff other dogs for<br/>love. I've found the hottest Corgi on<br/>BinDog. Woof.</h2>
          <img class="test-image" src="dog-img.jpg" alt="dog-profile"/>
          <em>Pebbles, New York</em>
        </div>
        <div class="carousel-item">
          <h2 class="testimonial-text">My dog used to be so lonely, but with <br/> BinDog's help, they've found the love of <br/> their life. I think.</h2>
          <img class="test-image" src="lady-img.jpg" alt="lady-profile"/>
          <em>Beverly, Illinois</em> 
        </div>
       
      </div>
      <a class="carousel-control-prev" href="#testimonials-carsol" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#testimonials-carsol" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>






  

    

  </section> */}


        </div>
    )
}

export default test;