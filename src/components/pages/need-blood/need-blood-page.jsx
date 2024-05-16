import React from 'react';
import HeaderComponent from "../../sections/header/header-component";
import BeforeFooterCTA from "../../sections/before-footer-cta/before-footer-cta-components";
import FooterComponent from "../../sections/footer/footer-component";
import poorKidsImage from "../../../assets/images/school-stationary-distribution.jpg";
import secondImage from "../../../assets/images/child-training.png";
// import './about-section.css'; // Import your CSS file for styling

const AboutSection = () => {
  return (
    <>
      <HeaderComponent />
      <div className="mt-20 bg-gray-100"> {/* Adding top margin to create space between header and about section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
              <div className="lg:w-1/2 mb-6 lg:mb-0">
                {/* Use imported images directly */}
                <img src={poorKidsImage} alt="Poor Kids" className="about-image rounded-lg shadow-lg  lg:mb-0 lg:mr-6 hover:scale-105 transition duration-300  border-4 " />
                <img src={secondImage} alt="Second Image" className="about-image rounded-lg shadow-lg hover:scale-105 transition duration-300 border-4" />
              </div>
              <div className="lg:w-1/2 lg:pl-10">
                <h2 className="text-3xl font-bold mb-2 text-center lg:text-left">Give Hope Foundation Nagpur</h2>
                <p className="text-gray-700 mb-6 text-center lg:text-left">Reg. Nagpur/0000018/2022</p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">About Us</h3>
                  <p className="text-gray-700 mb-4">Transforming Lives by GHF! Our passion and goal are to eradicate poverty and illiteracy by empowering all people, especially women and children, irrespective of caste, creed, religion, and community. Therefore, we adopt innovative programs in partnership with NGOs and Govt. institutions to help the society at large, women, and children. We want to be a voice to the voiceless!!!</p>
                  <h3 className="text-xl font-semibold mb-2">About GHF</h3>
                  <p className="text-gray-700 mb-4">Give Hope Foundation is a child-focused humanitarian organization that has been serving the most vulnerable children and their families for over 5 years. The non-profit organization passionately serves in Maharashtra, impacting around 300 children and their families. We employ proven, effective development, public engagement, and relief practices empowering vulnerable children and communities living in contexts of poverty and injustice to become self-sufficient and bring lasting change. With you, we can build a nation fit for children. So, Join us. Together for children. For change. For life.</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Contact</h3>
                  <p className="text-gray-700 mb-2">Give Hope Foundation Nagpur, Plot No. 225, New Shanti Nagar, Dabha, Nagpur - 440023 Maharashtra, India</p>
                  <p className="text-gray-700 mb-2">Phone No. 9511893606</p>
                  <p className="text-gray-700 mb-2">Email: givehopefdn21@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <BeforeFooterCTA />
      <FooterComponent />
    </>
  );
}

export default AboutSection;
