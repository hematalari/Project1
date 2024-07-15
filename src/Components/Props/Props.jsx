import React ,{ Component} from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Props.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" , borderRadius: "50px"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "50px" }}
      onClick={onClick}
    />
  );
}

const Props = ({data})=> {
  const navigate = useNavigate()

  const gotToNewPage=()=>{
    navigate("/Project1/ContactUs");
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="slider-container">
        <div className='slide'>
        <Slider {...settings}>
        {data.map((item,idx)=>{
           return <div className='props'>
           <div key={idx} className='props1'>
            <img src={item.src} alt="" />
            </div>
            <div className='props2'>
            <h3>{item.title}</h3>
            <h4>{item.subtitle}</h4>
            <p>{item.address}</p>
            <h5>{item.price}</h5>
           <button className='btn' onClick={() => gotToNewPage()} >More Details</button>
          </div>
          </div>
        })}
        </Slider> 
        </div>
    </div>
  );
}

export default Props;