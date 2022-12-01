import React, { useState, useEffect } from "react";
import styled from "styled-components";
import './checkout.css'
import AOS from "aos";
import "aos/dist/aos.css";
function CardNest(props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(props.takedata);
  });

  return (
    <div>
      {data != null ? (
        <div className = "card thiscard" data-aos="zoom-in-up">
          <h1 className = "myh1">{data.name}</h1>
          <img src = {data.imagelink}></img>
          <h1 className = "myh1">{data.price}<span className = "myspan"> ETH</span></h1>
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
  );
}
export default CardNest;


