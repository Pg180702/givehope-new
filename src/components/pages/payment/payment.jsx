import React from 'react';
import Qr from '../../../assets/childs/GHF-QRCode.jpg';
import Bank from '../../../assets/childs/bank-details.png';
import FooterComponent from "../../sections/footer/footer-component";
import HeaderComponent from "../../sections/header/header-component";
import BeforeFooterCTA from "../../sections/before-footer-cta/before-footer-cta-components";
import Slider from "../../sections/slider/slider";

const DonateOptions = () => {
    return (
        <>
            <HeaderComponent />

            <div className="mt-24 flex flex-col items-center"> {/* Increased top margin to 24 */}
                <h2 className="text-2xl font-bold mb-4 pt-12 pb-4">Donation Options</h2>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="max-w-[400px] mx-4 mb-4 md:mb-0"> {/* Increased max-width to 400px */}
                        <img src={Qr} alt="QR Code" className="w-full rounded-lg shadow-lg transform hover:scale-105 transition duration-300" />
                        <p className="text-center mt-2 text-sm">Scan QR Code to donate</p>
                    </div>
                    <div className="max-w-[400px] mx-4"> {/* Increased max-width to 400px */}
                        <img src={Bank} alt="Bank Details" className="w-full rounded-lg shadow-lg transform hover:scale-105 transition duration-300" />
                        <p className="text-center mt-2 text-sm">Use bank details to donate</p>
                    </div>
                </div>
                {/* <button>Donation Form</button> */}
                <button className="bg-dark hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full border border-white"                         onClick={() => { window.location.href = '/donationform'; }}
>
  Donation Form
</button>
            </div>
            <Slider />
            <BeforeFooterCTA />
            <FooterComponent />
        </>
    );
};

export default DonateOptions;
