import React, { useState } from "react";
import BestSellerCarousel from "../components/BestSellers_carousel";
import "../pages/shop.css";
import { Container, Row } from "react-bootstrap";
import bestseller from "../data/bestseller.js";
import SingleCard1 from "../components/SingleCard1.jsx";
import products from "../data/favouriteBooks.js";

export default function Shop() {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const product = products.map((item) => (
    <SingleCard1
      name={item.name}
      title={item.title}
      photo={item.photo}
      price={item.price}
      key={item.id}
    />
  ));

  const itemsPerPage = 5; // Number of items to show at once
  const totalItems = bestseller.length; // Total number of items

  const handleScrollLeft = () => {
    // Update currentIndex (when left arrow is clicked)
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalItems) % totalItems
    );
  };

  const handleScrollRight = () => {
    // Update currentIndex (when right arrow is clicked)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  // Determine visible items, wrapped around
  const visibleItems = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const index = (currentIndex + i) % totalItems; // Calculate cyclic index
    visibleItems.push(bestseller[index]);
  }

  return (
    <main>
      <section className="shop">
        <Container className="con-shop">
          <div className="shop-page-title">
            <h1>Products</h1>
          </div>
        </Container>
      </section>
      <section className="best-collection-area-wrapper">
       
          <Row>
            <div style={{ position: "relative" }}>
              <button className="carousel-control-prev" onClick={handleScrollLeft}>
               
              </button>
              <div className="best-collection-area">
                {visibleItems.map((item, index) => (
                  <BestSellerCarousel
                    key={index} // Unique key for each card
                    title={item.title}
                    image={item.image}
                  />
                ))}
              </div>
              <button className="carousel-control-next" onClick={handleScrollRight}>
                
              </button>
            </div>
          </Row>
        
      </section>
      <section>
      <div className="section-product d-flex mx-5">{product}</div>
      </section>
    </main>
  );
}