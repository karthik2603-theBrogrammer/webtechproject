import React, { useState, useEffect} from "react";
import {useNavigate} from "react-router-dom" 
import styled from "styled-components";
import Card from "./card";
import "./body.css";
import Mycarousel from '../extra/carousel.js';

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import axios from "axios";
// ..
AOS.init();
export default function Body() {
  const navigate = useNavigate()
  const [data, setData] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [dict, setDict] = useState({});
  useEffect(() => {
    // if(data === []) return;
    fetch("https://api.opensea.io/api/v1/assets?format=json")
      .then((response) => {
        return response.json();
      })
      .then((nftdata) => {
        setData(nftdata.assets);
      });
  }, []);
  // function changeSubmit() {
  //   setSubmit(true);
  //   console.log(submit);
  // }
  useEffect(() => {
    if(submit == true){
      
      axios.post("/cart",dict)
        .then(res => console.log(res))
        .catch(err => console.log(err))
      navigate("/cartcheckout")
    }
  }, [submit]);

  let dictUpdater = (key, value) => {
    setDict({ ...dict, [key]: value });
  };
  return (
    <div>
      <TextContainer>
        <h1 data-aos="zoom-in-up" data-aos-duration="1000">
          What is an <span>NFT</span>?
        </h1>
      </TextContainer>
      <div id="block-container">
        <Block data-aos="flip-right" data-aos-duration="1500">
          <p>
            <span className="nft-span">NFT</span> means non-fungible tokens,
            which are generally created using the same type of programming used
            for cryptocurrencies.
          </p>
        </Block>
        <Block data-aos="flip-left" data-aos-duration="1500">
          <p>
            <span className="nft-span">NFT</span>s may be a digital artwork or
            any other unique item that can be purchased and the owner now has a
            digital token which proves your authority over the artwork you
            bought.
          </p>
        </Block>
      </div>
      {
        data!=null?(
          <Mycarousel array_data = {[data[10],data[11],data[12],data[13],data[14],data[15],data[16],data[17],data[18],data[19]]}/>

        ):(
          <>carousel Loading</>

        )
      }
      <TextContainer2 data-aos="zoom-in-up" data-aos-duration="1000">
        <h1>
          OTHER COMMONLY AVAILABLE <span className="nft-span">NFT</span>'s
        </h1>
      </TextContainer2>

      {data !== null ? (
        <CardContainer data-aos="zoom-in-up" data-aos-duration="300">
          <Card dictUpdater = {dictUpdater} nftObject={data[0]} data-aos="zoom-in-right" price = {1}/>
          <Card dictUpdater = {dictUpdater} nftObject={data[1]} price = {1.9}/>
          <Card dictUpdater = {dictUpdater} nftObject={data[2]} price = {2.2} />
          <Card dictUpdater = {dictUpdater} nftObject={data[3]} data-aos="zoom-in-left" price = {2.3}/>
          <Card dictUpdater = {dictUpdater} nftObject={data[4]} price = {4.1}/>
          <Card dictUpdater = {dictUpdater} nftObject={data[5]} price = {3.1}/>
          <Card dictUpdater = {dictUpdater} nftObject={data[6]} price = {2}/>
          <Card dictUpdater = {dictUpdater} nftObject={data[7]} price = {0.8}/>
          <Card dictUpdater = {dictUpdater} nftObject={data[8]} price = {4.4}/>
          <Card dictUpdater = {dictUpdater} nftObject={data[9]} price = {10}/>
          <div onClick={() => setSubmit(true)} id = "submitMain">
            <span>Proceed To Cart!</span>
          </div>
        </CardContainer>
      ) : (
        <TextContainer2>
          Please wait while we prepare your NFT's....
        </TextContainer2>
      )}
    </div>
  );
}

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  height: 90vh;
`;
const TextContainer = styled.div`
  height: 70vh;
  h1 {
    font-size: 7em;
    margin: 5%;
  }
  p {
    margin: 2%;
    width: 10em;
    font-size: 1.5em;
    font-weight: bolder;
  }
  width: 100vw;
  color: white;
  font-family: Georgia, "Times New Roman", Times, serif;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    height: 40vh;
    h1 {
      font-size: 4em;
    }
    p {
      font-size: 1em;
      width: 85%;
    }
  }
`;
const TextContainer2 = styled.div`
  height: 70vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2em;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: bolder;
  @media screen and (min-width: 900px) {
    h1 {
      font-size: 2em;
    }
  }
`;
const Block = styled.div`
  height: 16em;
  margin: 10%;
  width: 25%;
  font-size: 1.3em;
  text-align: center;
  padding: 3%;
  word-spacing: 1px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  display: flex;
  background-color: white;
  box-shadow: 2px 2px 2px 1px gold;
  border-radius: 23px;

  /* background-image: linear-gradient(to bottom, #1c122b,black); */
  justify-content: center;
  align-items: center;
  color: #1c122b;
  font-weight: bolder;
  @media screen and (max-width: 900px) {
    height: 8em;
    p {
      font-size: 0.6em;
      width: 10em;
    }
  }
`;
const Proceed = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-basis: 100%;
  span {
    font-family: Georgia, "Times New Roman", Times, serif;
    background-color: #4e00c2;
    padding: 1em;
    margin: 0.5em;
    font-size: 1.5em;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
  }
`;
