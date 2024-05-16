import React from 'react';
import HeaderComponent from "../../sections/header/header-component";
import ChildrenSlider from './donate';
import BeforeFooterCTA from "../../sections/before-footer-cta/before-footer-cta-components";
import FooterComponent from "../../sections/footer/footer-component";

import Payel from '../../../assets/childs/Payel 12 Y.jpg'; // Import child images
import Santoshi from '../../../assets/childs/Santoshi 14 Y.jpg';
import Aryan from '../../../assets/childs/Aryan 8 Y.jpg';
import Aryen from '../../../assets/childs/Aryen Sedmate 8 Y.jpg';
import Himanshu from '../../../assets/childs/Himanshu 10 Y.jpg';
import Laxmikant from '../../../assets/childs/Laxmikant 10 Y.jpg';
import Pranay from '../../../assets/childs/Pranay.jpg';
import Vedant from '../../../assets/childs/Vedant  9 Y.jpg';


// Import more child images as needed

const childrenData = [
    {
      name: 'Payel',
      age: 12,
      gender: 'Girl',
      location: 'Gondiya',
      story: 'Payel Mankar lives with her mother in a small village. Her father left the family, leaving her mother to care for Payel and her sibling. Despite her mother’s best efforts, their income is not sufficient to meet all their needs. Your sponsorship will greatly improve their living conditions and bring hope into their lives.',
        image: Payel,
    },
    {
      name: 'Santoshi',
      age: 14,
      gender: 'Girl',
      location: 'Gondiya',
      story: 'Santoshi lives with her mother in a small village. Her father also left the family, leaving them in financial strain. Despite her mother’s hard work, they struggle to make ends meet. Your sponsorship will help alleviate their burdens and bring joy into their lives.',
    image:Santoshi,
    },
    {
      name: 'Laxmikanth',
      age: 10,
      gender: 'Boy',
      location: 'Maharashtra',
      story: 'Laxmikant lives with his parents in a small village in Maharashtra. His father is a day laborer with meager earnings, and his mother tries her best to make do with what little they have. Your sponsorship will significantly improve their living conditions and provide hope for a better future.',
    image:Laxmikant,
    },
    {
      name: 'Pranye',
      age: 12,
      gender: 'Boy',
      location: 'MH',
      story: 'Pranye lives with his parents in an urban area of Maharashtra. Despite his father’s hard work, their income is insufficient to meet all their needs. Your sponsorship will provide educational opportunities for Pranye and improve their overall living conditions.',
    image:Pranay,
    },
    {
        name: 'Aaryen',
        age: 8,
        gender: 'Boy',
        location: 'Gondiya',
        story: 'Aaryen lives with his parents. The parents are self-employed. But even with their combined incomes, they cannot make ends meet. Your sponsorship at this hour of need is a great blessing for the family.',
      image:Aryen,
    },
      {
        name: 'Himanshu Mandare',
        age: 10,
        gender: 'Boy',
        location: 'Maharashtra',
        story: 'Himanshu Mandare is a 10-year-old boy from Maharashtra. He lives with his parents, who are self-employed. Despite their efforts, their combined incomes are insufficient to cover all their expenses. Your sponsorship at this hour of need is a great blessing for the family.',
      image:Himanshu
    },
    //   {
    //     name: 'Jay Waghade',
    //     age: 7,
    //     gender: 'Boy',
    //     location: 'Maharashtra',
    //     story: 'Jay Waghade is a 7-year-old boy from Maharashtra. He lives with his parents in a small village. Despite being self-employed, their incomes are meager and not enough to make ends meet. Your sponsorship will greatly enhance their living conditions and bring hope into their lives.',
    // image:Laxmikant,  
    // },
      {
        name: 'Mayur Patne',
        age: 10,
        gender: 'Boy',
        location: 'Maharashtra',
        story: 'Mayur Patne is a 10-year-old boy from Maharashtra. He lives with his parents in a rural area. Despite his father working long hours as a daily laborer and his mother having a job, their combined incomes are insufficient to cover all their expenses. Your sponsorship at this hour of need is a great blessing for the family.',
      image:Aryan,
    },
      {
        name: 'Ishant Mandare',
        age: 8,
        gender: 'Boy',
        location: 'Maharashtra',
        story: 'Ishant Mandare is an 8-year-old boy from Maharashtra. He lives with his mother in a small village. Despite her efforts as a self-employed individual, her income is not enough to make ends meet. Your sponsorship will greatly improve their living conditions and bring hope into their lives.',
    image:Vedant,  
    },
  ];

const DonationPage = () => {
  
  return (
    <div>
      <HeaderComponent />
      <div className="container mx-auto px-4 mt-10">
        {/* <h1 className="text-3xl font-bold my-8 text-center">Children Donation</h1> */}
        <ChildrenSlider childrenData={childrenData} />
      </div>
      <BeforeFooterCTA />
      <FooterComponent />
    </div>
  );
};

export default DonationPage;
