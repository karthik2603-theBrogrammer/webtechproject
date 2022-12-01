import React, { useState, useEffect } from "react";
import CardNest from "./cardnest";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

function Checkoutcard(prop) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (typeof prop.nftObject[1] == typeof "hi") {
      setData(prop.nftObject[1]);
    } else if (typeof prop.nftObject[1] == typeof new Object()) {
      setData(prop.nftObject[1]);
    }
  }, [data]);
  useEffect(()=>{
    if(typeof prop.nftObject[1].price == 'number'){
        console.log(prop.nftObject[1].price)
    }
  },[])


  return (
    <div>
      {typeof data == null ? (
        <div>
          <h1>Error Recieving the Order Details</h1>
        </div>
      ) : (
        <div>
          {typeof data == "string" ? (
            <Order data-aos="zoom-in-up" className = "card" id = "orderNumber"> Order Number :  <span>{data} </span> </Order>
          ) : (<CardContainer className = "checkoutParent">
            <CardNest takedata={data} />
          </CardContainer>
            
          )}
          
        </div>
      )}
    </div>
  );
}

export default Checkoutcard;
const Order = styled.div`
    height: 20vh;
    font-weight: bolder;
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Josefin Sans", sans-serif;
    width: 100vw;
    color: white;
    span{
        color: #FFD700;
    }
    @media only screen and (max-width: 900px) {
        font-size: 30px;   
    }

`
const CardContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: center;
    margin: 90px;

`
