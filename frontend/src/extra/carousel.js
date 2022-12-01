import React, {useState} from 'react';
import {TiChevronLeftOutline, TiChevronRightOutline} from 'react-icons/ti';
import './carousel.css'
import '../components/card.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({cardData}) => (
  cardData != null?(
    <div className = "card myClass">
      <h3>{cardData.id}</h3>
      <img src = {cardData.image_preview_url}></img>
      <h2 id = "name">{cardData.name}</h2>


    </div>

  ):(<></>

  )
);

const Carousel = ({children}) => {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);
  
  return (
    <div className='carousel-container'>
      {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
      {React.Children.map(children, (child, i) => (
        <div className='carousel-card-container' style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            'pointer-events': active === i ? 'auto' : 'none',
            'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}>
          {child}
        </div>
      ))}
      {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
    </div>
  );
};

const Mycarousel = (prop) => (
   
  <div className='carousel-app' data-aos = "zoom-in">
    {prop != null?(
      <Carousel>
      {[...new Array(CARDS)].map((_, i) => (
        <Card cardData = {prop.array_data[i]}/>
      ))}
    </Carousel>

    ):(
      <></>
    )}
  </div>
);

export default Mycarousel;