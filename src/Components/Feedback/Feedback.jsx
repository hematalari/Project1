import React,{Component}from 'react'
import "./Feedback.css"
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
const Feedback = ({Feed}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <div className='feed-cont'>
        <div className="feed">
        <Slider {...settings}>
        {Feed.map((item,idx)=>{
            return <div className="feed-box">
                <div key={idx} className="feed-box1">
                    <p>{item.s_feed}</p>
                    <h4>{item.s_name}</h4>
                </div>
            </div>
        })}
        </Slider>
        </div>
    </div>
  );
}

export default Feedback;