import axios from "axios";
import React from "react";
import './checkout.css'
import Checkoutcard from "./checkoutcard";
import { useState, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

function Checkout() {
  const [myFinalPrice, setMyFinalPrice] = useState(0);
  const [checkoutData, setCheckoutData] = useState(null);
  useEffect(() => {
    axios
      .get("/cartcheckout")
      .then((res) => {
        // console.log(res.data);
        setCheckoutData(res.data);
        setMyFinalPrice(res.data.total_price)

      })
      .catch((err) => console.log(err));
  }, [checkoutData]);


  return (
    <div>
      {checkoutData !== null ? (
        <div>
          {Object.entries(checkoutData.data).map((element, index) => {
            return <Checkoutcard className = "checkoutParent" key={index}  nftObject={element} />;
          })}
        </div>
      ) : (
        <div>Please wait while we load your Order details</div>
      )}
      <FinalPrice data-aos="zoom-out-down">
        {
          myFinalPrice != undefined ? <h1>Your Final Price is: <span>{myFinalPrice}</span> ETH</h1>:<>Calculating...</>
        }
      </FinalPrice>
      
    </div>
  );
}

export default Checkout;
const FinalPrice = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 80px 0;
    span{
        color: #FFD700;
        font-size: 1.5em;
    }
    /* background-image */
`
const Payment = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`