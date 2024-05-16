import "./hero-component-styles.scss";

const HeroComponent = ({ subheadingText, headingText, classHint }) => {
	return (
		<section className={`main-wrapper ${classHint}`}>
			<div className="main-container">
				<div className="text-wrapper sm:w-[650px] flex flex-col justify-center items-center">
					<h3 className="subheading relative font-bold sm:text-[20px] leading-[2em] text-center tracking-[0.3em] uppercase   text-off_white ">
						{subheadingText}
					</h3>
					<h1 className="font-bold text-[35px] sm:text-[60px] leading-tight text-center capitalize text-white">
						{headingText}
					</h1>
					<button
                        className="bg-blue-500 hover:bg-blue-700 text-white bg-dark font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-110"
                        onClick={() => { window.location.href = '/donate'; }}
                    >
                        Donate Now
                    </button>
				</div>
			</div>
		</section>
	);
};

export default HeroComponent;
