import React, { useRef } from "react";
import { Col } from "react-bootstrap";
import "./bestsellers.css"

export default function BestSeller_carousel(props){
  

    return(
        
        <div className="bestseller-card">
            <img src={props.image} alt="" />
            <h5>{props.title}</h5>
        </div>
     
    )
}