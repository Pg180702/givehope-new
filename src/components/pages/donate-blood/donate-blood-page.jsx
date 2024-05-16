import { useState } from "react";
import HeaderComponent from "../../sections/header/header-component";
import BeforeFooterCTA from "../../sections/before-footer-cta/before-footer-cta-components";
import FooterComponent from "../../sections/footer/footer-component";
import HeroComponent from "../../sections/hero/hero-component";

import BlanketDistributionImage from "../../../assets/events/blancates-distribution.jpg";
import Career from "../../../assets/events/career-councelleing.jpg";
import ChildT from "../../../assets/events/child-training.png";
import CompT from "../../../assets/events/computer-taining.jpg";
import CycleD from "../../../assets/events/cycle-distribution-1.png";
import BorewellD from "../../../assets/events/Bore-well.png";
import GasD from "../../../assets/events/gas-stow-distribution.jpg";
import GoatD from "../../../assets/events/goat-distribution.jpg";
import GrainD from "../../../assets/events/grain-distribution.jpeg";
import SchoolS from "../../../assets/events/school-stationary-distribution.jpg";
import YouthC from "../../../assets/events/youth-councelling.jpg";


import Axios from "axios";

const EventCard = ({ image, title, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className="w-full h-64 object-cover object-center" src={image} alt={title} />
      <div className={`p-6 ${hovered ? 'bg-gray-100' : ''}`}>
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

const DonateBloodPage = () => {
  // Add your events array here
  const events = [
	{
		title: "Blanket Distribution",
		image: BlanketDistributionImage,
		description: "By keeping in view of providing Compassion Services we brought warmth to the hearts of the underserved! Our NGO proudly distributed blankets to impoverished families, offering comfort and relief during the chilly season. Together, we strive to make a difference."
	  },
	  {
		title: "BoreWell",
		image: BorewellD,
		description: "Give Hope Foundation has been providing Bore Wells in Maharashtra where there is lacking of clean water in backward and interior communities. Our goal is to help poor people and communities those who are suffering for clean water."
	  },
	  {
		title: "Career Counselling",
		image: Career,
		description: "Empowering the future through knowledge and guidance. Our NGO is committed to uplifting the aspirations of underprivileged youth through impactful career counseling, fostering dreams that transcend limitations. Join us in sculpting a brighter tomorrow, one empowered choice at a time."
	  },
	  {
		title: "Child Training",
		image: ChildT,
		description: "Empowering young minds through education and training, our NGO is dedicated to fostering a brighter future for children. Join us in shaping tomorrow's leaders through transformative learning experiences and opportunities for growth and trying to ensure that they have a better future."
	  },
	  {
		title: "Computer Training",
		image: CompT,
		description: "Empowering the next generation through knowledge! Our NGO proudly offers computer training for children, fostering digital literacy and opening doors to a world of opportunities. Join us in shaping brighter futures through education and technology."
	  },
	  {
		title: "Cycle Distribution",
		image: CycleD,
		description: "Empowering dreams, one pedal at a time! Thanks to your support, our NGO provided bicycles to children, unlocking new opportunities and fostering a brighter future through the joy of cycling. Together, we're transforming lives and creating a path to a better tomorrow."
	  },
	  {
		title: "Youth Counselling",
		image: YouthC,
		description: "Empowering the future through meaningful connections and guidance. Our dedicated youth counseling program provides a safe space for personal growth, fostering resilience and inspiring dreams. Together, we shape a brighter tomorrow."
	  },
	  {
		title: "Gas Stove Distribution",
		image: GasD,
		description: "Empowering homes with clean energy! Our NGO proudly distributed gas stoves to families, fostering a safer and sustainable cooking environment. Join us in our mission to make a positive impact on lives and the planet. #CleanEnergy "
	  },
	  {
		title: "Goat Distribution",
		image: GoatD,
		description: "Empowering families for a sustainable future! Our NGO proudly provided goats to deserving families, fostering economic independence and ensuring a brighter tomorrow. Together, we are cultivating change and nurturing resilience in communities."
	  },
	  {
		title: "Grain Distribution",
		image: GrainD,
		description: "During the COVID-19, Give Hope Foundation taken the initiative to help over Grocery kits / Packets distributed to such poor families, migrant workers, marginalized individuals and street dwellers who were in dire need of food provisions during lockdown in India. Therefore, we are moved with compassion to help as many as possible in Maharashtra and still we are continuing."
	  },
	  {
		title: "School Stationary Distribution",
		image: SchoolS,
		description: "Empowering futures through education! Our NGO recently distributed essential school stationary to children, igniting a spark of learning and creativity. Together, we are building a brighter tomorrow for these young minds."
	  },
	  {
		title: "Child Development",
		image: ChildT,
		description: "Empowering futures through education! Our NGO recently distributed essential school stationary to children, igniting a spark of learning and creativity. Together, we are building a brighter tomorrow for these young minds."
	  }
  ];

  return (
    <>
      <HeaderComponent />
	  			{/* <HeroComponent {...DonateBloodPageDetails.hero} /> */}

		<div className="container mx-auto py-12 mt-16"> {/* Add margin top here */}
        <h1 className="text-3xl font-bold text-center mb-8">Our Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              image={event.image}
              description={event.description}
            />
          ))}
        </div>
      </div>
      <BeforeFooterCTA />
      <FooterComponent />
    </>
  );
};

export default DonateBloodPage;
