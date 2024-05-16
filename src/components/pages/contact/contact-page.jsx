import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactDetailsComponent from "../../sections/details/details-component";

import HeaderComponent from "../../sections/header/header-component";
import BeforeFooterCTA from "../../sections/before-footer-cta/before-footer-cta-components";
import FooterComponent from "../../sections/footer/footer-component";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kh7sltr', 'template_p5l0bgt', form.current, {
      publicKey: 'DbEx-KOWwlv-8pjOl',
    })
    .then(() => {
      console.log('SUCCESS!');
    }, (error) => {
      console.log('FAILED...', error.text);
    });

    e.target.reset();
  };

  const contactDetails = [
    {
      key: "phone",
      stepNumber: <FaPhoneAlt />,
      stepName: "Phone",
      stepDescription: "+91 9511893606",
      stepUrl: "tel:+9511893606",
    },
    {
      key: "email",
      stepNumber: <MdEmail />,
      stepName: "Email",
      stepDescription: "givehopefdn21@gmail.com",
      stepUrl: "mailto:givehopefdn21@gmail.com",
    },
    {
      key: "address",
      stepNumber: <FaMapMarkerAlt />,
      stepName: "Address",
      stepDescription: "Plot no. 225, New Shanti nagar, Dabha, Nagpur-440023,Maharashtra, India",
    },
  ];

  return (
    <>
      <HeaderComponent />

	  <section className="bg-gray-100 py-16 mt-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Page</h2>
        <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="user_firstname">First Name</label>
              <input type="text" placeholder="First Name" name="user_firstname" required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="user_lastname">Last Name</label>
              <input type="text" placeholder="Last Name" name="user_lastname" required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="user_email">Email</label>
              <input type="email" placeholder="Email" name="user_email" required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="user_number">Phone No</label>
              <input type="number" placeholder="Phone No" name="user_number" required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="Address">Address</label>
              <textarea name="Donation" placeholder="Address" rows="4" className="resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="Message">Message</label>
              <textarea name="Message" placeholder="Message" rows="4" className="resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white bg-dark font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </section>

      {/* Render ContactDetailsComponent here */}
      <ContactDetailsComponent contactDetails={contactDetails} />

      <BeforeFooterCTA />
      <FooterComponent />
    </>
  );
};

export default ContactPage;
