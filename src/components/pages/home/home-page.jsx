import HeroComponent from "../../sections/hero/hero-component";
import TwoCtaComponent from "../../sections/two-cta/two-cta-component";
import ThreeStepProcessComponent from "../../sections/three-step-process/three-step-process-component";
import SideBySideComponent from "../../sections/side-by-side/side-by-side-component";
import QuoteComponent from "../../sections/quote/quote-component";
// import CriteriaComponent from "../../sections/criteria/criteria-component";
import HeaderComponent from "../../sections/header/header-component";
import BeforeFooterCTA from "../../sections/before-footer-cta/before-footer-cta-components";
import FooterComponent from "../../sections/footer/footer-component";
import Slider from "../../sections/slider/slider";

// import Slider from "./components/pages/slider/slider";


const HomePage = () => {
	
      
	const HomePageDetails = {
		donate_blood: {
			subheadingText: "Save Lives Today",
			headingText: "Donate Money with Give Hope Foundation",
			classHint: "side-col-image donate-blood-with-hemocell",
			paraText:
				"At our organization, we're committed to making a positive impact on the lives of disadvantaged children. Through generous donations, we provide monetary support, stationary, and other essential items to empower these children and give them hope for a better future.",
			imageUrl: "../../../assets/images/blood-donation().jpg",
			buttonText: "Donate Now",
			buttonLink: "/donate",
			buttonHave: true,
		},
		quote: {
			classHint: "quote",
			quoteText: `"The power of one's generosity knows no bounds; a single act of donation can illuminate countless lives."`,
		},
		why_donate_blood: {
			subheadingText: "Donate blood today",
			headingText: "Why should you donate blood?",
			classHint: "side-col-image why-donate-blood",
			paraText: `Donating blood is a selfless act that has the power to save lives. Here are a few reasons why you should consider donating blood:
			\n― You could help save up to three lives with just one donation.
			― Blood is always needed in emergency situations, such as natural disasters and accidents.
			― Blood is needed for patients undergoing surgeries, cancer treatment, and other medical procedures.
			― Blood cannot be manufactured, which means that the only source of blood is through donations from volunteers.
			― Donating blood can also have health benefits for the donor, such as reducing the risk of heart disease and cancer.`,
			imageUrl: "../../../assets/images/blood-donation(1).jpg",
			buttonText: "Donate Now",
			buttonLink: "/donate",
			buttonHave: true,
		},
		eligiblity_criteria: {
			subheadingText: "Are you ready?",
			headingText: "Eligibility Criteria",
			classHint: "side-col-image eligibility-criteria",
			paraText: [
				`18-50 years, above 50 Kg.`,
				`Normal temperature, pulse and blood pressure.`,
				`No Respiratory Diseases`,
				`Above 12.5 g/dL Hemoglobin`,
				`No skin disease, puncture or scars`,
				`No history of transmissible disease`,
			],
			imageUrl: "../../../assets/images/blood-donation(1).jpg",
			buttonText: "Donate Now",
			buttonLink: "/donate",
			buttonHave: false,
		},
		hero: {
			subheadingText: "Every Donation Counts:",
			headingText: "Together, Let's Create a Brighter Tomorrow for All!",
			classHint: "home-page-hero",
			
		},
		stepsText: {
			subheadingText: "Donation Process",
			headingText: "Step-by-Step Guide to Donating Money",
		},
	};

	const stepDetails = [
		{
			key: "check-eligibility",
			stepNumber: "01",
			stepName: "Click on Donate Money",
			stepDescription:
				"Click on the Donate Money button to navigate to the donation page.",
		},
		{
			key: "schedule-an-appointment",
			stepNumber: "02",
			stepName: "Choose your preferred payment method:			",
			stepDescription:
				"either scan the QR code for online payment or find our bank details for direct transfer.",
		},
		{
			key: "donate-blood",
			stepNumber: "03",
			stepName: "Fill out the donation form below:",
			stepDescription:
				"Fill out the form below to let us know about your generous donation. Thank you for your support!",
		},
	];

	return (
		<>
			<HeaderComponent />

			<HeroComponent {...HomePageDetails.hero} />
			<Slider/>
			<TwoCtaComponent />
			{/* <Slider/> */}
			<ThreeStepProcessComponent
				stepsText={HomePageDetails.stepsText}
				stepDetails={stepDetails}
			/>
			<SideBySideComponent {...HomePageDetails.donate_blood} />
			<QuoteComponent {...HomePageDetails.quote} />
			{/* <ChildrenSlider /> */}
            {/* <ImgSlider childrenData={childrenData} /> */}
			{/* <SideBySideComponent {...HomePageDetails.why_donate_blood} /> */}
			{/* <CriteriaComponent {...HomePageDetails.eligiblity_criteria} /> */}
			<BeforeFooterCTA />
			<FooterComponent />
		</>
	);
};

export default HomePage;