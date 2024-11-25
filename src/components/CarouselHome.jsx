import React from "react";
import carouseldata from "../data/carouselData";
import {Carousel}from "react-bootstrap";
import "../components/carousel.css"

export default function CarouselHome(){
    return (
      
      <Carousel className="first-carousel">
      {carouseldata.map((item) => (
        <Carousel.Item key={item.id} >
          <div
            className=" wrap-carousel d-flex align-items-center justify-content-center"
            
          >
            <div className="carousel-text p-5">
              <h3>{item.title}</h3>
              <h1>{item.description}</h1>
              <h1>{item.description1}</h1>
              <div className="wrap-btn">
              <button className="btn-carousel mt-3">
                Shop Now
              </button>
              </div>
            </div>
            <div className="carousel-image">
              <img
                className="d-block"
                src={item.image}
                alt={item.title}
              />
            </div>
          </div>
        </Carousel.Item>
      ))};
      
    </Carousel>
   
    )
}