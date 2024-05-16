import HomePage from "./components/pages/home/home-page";
import { Routes, Route, Navigate } from "react-router-dom";
import DonateBloodPage from "./components/pages/donate-blood/donate-blood-page";
// import HostBloodDrivePage from "./components/pages/host-blood-drive/host-blood-drive";
import NeedBloodPage from "./components/pages/need-blood/need-blood-page";
import ContactPage from "./components/pages/contact/contact-page";
import Donatemoney from "./components/pages/donatemoney/donatemoney";
import DonateOptions from "./components/pages/payment/payment";
import Donationform from "./components/pages/donationform/donationform";
// import Slider from "./components/pages/slider/slider";
// import Admin from "./components/layouts/admin";

// import Dashboard from "../src/components/views/admin/dashboard";
// import AdminDonateBlood from "../src/components/views/admin/admin-donate-blood";
// import AdminNeedBlood from "../src/components/views/admin/admin-need-blood";
// import AdminHostBloodDrive from "../src/components/views/admin/admin-host-blood-drive";
// import AdminNeedHelp from "../src/components/views/admin/admin-need-help";

export default function App() {
	return (
		<>
			{/* <HeaderComponent /> */}
			{/* <BrowserRouter> */}
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				{/* <Route
					path="/host-blood-drive"
					element={<HostBloodDrivePage />}
				/> */}
				<Route path="/donate-blood" element={<DonateBloodPage />} />
				<Route path="/need-blood" element={<NeedBloodPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/donate" element={<Donatemoney/>} />
				<Route exact path="/payment" element={<DonateOptions />} />
				<Route exact path="/donationform" element={<Donationform />} />


				{/* <Route path="/volunteer" element={} /> */}

				{/* <Route path="/admin" element={<Admin />}>
					<Route index element={<Dashboard />} />
					<Route path="donate-blood" element={<AdminDonateBlood />} />
					<Route path="need-blood" element={<AdminNeedBlood />} />
					<Route
						path="host-blood-drive"
						element={<AdminHostBloodDrive />}
					/>
					<Route path="need-help" element={<AdminNeedHelp />} /> */}



					{/* <Route path="/redirect" element={<Navigate to="/" />} /> */}
				{/* </Route> */}
			</Routes>
			{/* </BrowserRouter> */}
			{/* <BeforeFooterCTA />
			<FooterComponent /> */}
		</>
	);
}
