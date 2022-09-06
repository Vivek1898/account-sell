import React from 'react'
import "./testi.css"
import photo from "./photo.png"
const test= ()=>{

    return(
        <div>


 <section id="testimonials">
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






  

    

  </section>


        </div>
    )
}

export default test;