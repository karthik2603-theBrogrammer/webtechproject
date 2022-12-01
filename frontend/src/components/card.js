import React, { useEffect, useState,useRef } from "react";
import './card.css'
const style = {}
export default function Card(nftProp) {
  const [data, setData] = useState(nftProp.nftObject)
  // const [dictionary, setDictionary] = useState(nftData.dictProp);
  const [status,setStatus] = useState(false)

  
  function changeStatus(){
    
    if(status == false){
      setStatus(!status);
      var sendDict = {
        name: data.name,
        id: data.id,
        price: nftProp.price,
        imagelink: data.image_preview_url,
      }
      nftProp.dictUpdater(data.name,sendDict);
    }
  }

  return(
    <>
  <div className="card" >
    <h3>{data.id}</h3>
    <img src = {data.image_preview_url}></img>
    <h2 id = "name">{data.name}</h2>
    <h2 id = "price"><span id = "priceSpan">{nftProp.price}</span> ETH</h2>
    {
      status===false?<span id = "purchase" onClick = {changeStatus} >Purchase</span>:<div id = "selected" onClick = {changeStatus}>Added To Cart</div>
    }
   
  </div>

  </>
  )
}
