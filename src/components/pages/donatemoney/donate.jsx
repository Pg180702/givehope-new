import React from 'react';
import Qr from '../../../assets/childs/GHF-QRCode.jpg';
import Bank from '../../../assets/childs/bank-details.png';



const ChildrenSlider = ({ childrenData }) => {
  return (

<div className="container mx-auto px-7 mt-24">
<h1 className="font-bold justify-center text-center text-2xl pt-12 pb-4">Sponsor a child</h1>

      <div className="flex flex-wrap justify-center ">
        
        {childrenData.map((child, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transform transition-transform duration-300 hover:scale-105"
          >
            <img
              className="w-full h-67 object-cover object-center"
              src={child.image}
              alt={child.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{child.name}</div>
              <p className="text-gray-700 text-base">
                {child.age} year-old {child.gender} from {child.location}
              </p>
              <p className="text-gray-700 text-base">{child.story}</p>
            </div>
            <div className="px-6 py-4">
            <button className="bg-dark hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full border border-white"                         onClick={() => { window.location.href = '/payment'; }}
>
  Donate Now
</button>

            </div>
          </div>
        ))}
      </div>
      <h1 className="font-bold justify-center text-center text-2xl pt-12 pb-4">Donation options</h1>

      <div className="flex justify-center mt-8">

        <img
          className="w-1/4 mx-2 banking-image"
          src={Qr}
          alt="Banking Info 1"
        />
        <img
          className="w-1/4 mx-2 banking-image"
          src={Bank}
          alt="Banking Info 2"
        />
      </div>
    </div>
    
  );
};

export default ChildrenSlider;
