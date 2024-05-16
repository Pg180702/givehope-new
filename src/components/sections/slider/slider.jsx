import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import child images
import Payel from '../../../assets/childs/Payel 12 Y.jpg';
import Santoshi from '../../../assets/childs/Santoshi 14 Y.jpg';
import Aryan from '../../../assets/childs/Aryan 8 Y.jpg';
import Aryen from '../../../assets/childs/Aryen Sedmate 8 Y.jpg';
import Himanshu from '../../../assets/childs/Himanshu 10 Y.jpg';
import Laxmikant from '../../../assets/childs/Laxmikant 10 Y.jpg';
import Pranay from '../../../assets/childs/Pranay.jpg';
import Vedant from '../../../assets/childs/Vedant  9 Y.jpg';

// Define Arrow component for slider navigation
function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,
            display: "block",
            background: "blue", // Change the background color here
            width: "36px", // Increase the width of the arrow
            height: "36px", // Increase the height of the arrow
            borderRadius: "50%", // Make the arrow circular
            textAlign: "center", // Center the arrow content
            lineHeight: "50px" // Center the arrow content vertically
  }}
        onClick={onClick}
      />
    );

  }
  

const SliderComponent = () => {
    // Child data
    const childrenData = [
        {
            name: 'Name:Payel, Age:12',
            image: Payel,
        },
        {
            name: 'Name:Santoshi, Age:14',
            image: Santoshi,
        },
        {
            name: 'Name:Aryan, Age:8',
            image: Aryan,
        },
        {
            name: 'Name:Aryen, Age:8',
            image: Aryen,
        },
        {
            name: 'Name:Himanshu, Age:10',
            image: Himanshu,
        },
        {
            name: 'Name:Laxmikant, Age:10',
            image: Laxmikant,
        },
        {
            name: 'Name:Pranay, Age:10',
            image: Pranay,
        },
        {
            name: 'Name:Vedant, Age:9',
            image: Vedant,
        },
        // Add more child data as needed
    ];

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }
        ]

    };

    return (
        <div className='container  mx-auto'>
        <div className="mt-10 "> {/* Add margin-top to create space between components */}
        </div>
        <h1 className=" font-bold  justify-center  text-center	 text-2xl ">Sponser a child</h1>
        <div></div>
        <Slider {...settings}>
            {childrenData.map((child, index) => (
                <div key={index} className='card relative'>
<img src={child.image} alt={child.name} className="object-cover  border-4 w-full h-96" />
                    <div className='card-body absolute bottom-0 left-0 right-0 bg-white  p-4'>
                        <h3 className="text-lg font-bold">{child.name}</h3>
                    </div>
                </div>
            ))}
        </Slider>

        </div>
    );
};

export default SliderComponent;
