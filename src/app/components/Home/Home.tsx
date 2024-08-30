import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Home = () => {
	var settings = {
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		speed: 2000,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		loop: true,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 1760,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 1460,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 1290,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				},
			},

			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
		],
	}

	return (
		<>
			<div
				id='home'
				style={{
					// backgroundImage:
					// 	'linear-gradient(62deg, #F7F3E3 0 50%, #C44536 0% 100%)',
					minHeight: '500px',
					backgroundColor: '#197278',
					maxHeight: '1200px',
					height: '100%',
					width: '100%',
				}}>
				<div className='container m-auto'>
					<div className='grid grid-cols-12 text-white'>
						<div className='bg-white flex flex-col justify-center col-span-12 md:col-span-5 md:bg-transparent'>
							<div className='container m-auto'>
								<div className='lg:pl-24 sm:pl-10 pl-0 py-20 md:py-0 md:text-start text-center'>
									<p className='text-3xl md:text-base lg:text-2xl '>Hello</p>
									<h1 className='text-5xl md:text-5xl lg:text-7xl xl:text-7xl mt-5 md:mt-3'>
										I'm Michael
									</h1>
									<h2 className='capitalize py-2 md:text-xl'>
										aspiring junior front-end developer
									</h2>
									<a
										href='/#portfolio'
										className=' cursor-pointer inline-block bg-orange transition-all duration-300 ease-in-out rounded-md py-3 px-5 font-medium mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-gray hover:shadow-md transform hover:translate-y-1 tracking-wider'>
										my projects
									</a>

									<a
										href='script.js.pdf'
										download='script script.pdf'
										className='ml-10 cursor-pointer inline-block bg-orange transition-all duration-300 ease-in-out rounded-md py-3 px-5 font-medium mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-gray hover:shadow-md transform hover:translate-y-1 tracking-wider'>
										my resume
									</a>
								</div>
							</div>
						</div>
						<div className='col-span-12 pt-[50px] md:bg-transparent  md:pt-[130px] md:col-span-7'>
							<div className='container m-auto'>
								<img src='/michal.webp' alt='michal' decoding='async' />
							</div>
						</div>
					</div>
					<div className='container m-auto absolute'>
						<div className='px-3'>
							<div
								className='relative max-w-sm bottom-[70px] md:max-w-4xl xl:max-w-3xl px-5 lg:px-10 overflow-auto mx-auto bg-white rounded-md z-20 border-gray border '
								style={{ boxShadow: 'gray 14px 13px 34px -23px' }}>
								<div className='py-4 lg:py-8 cursor cursor-all-scroll'>
									<Slider {...settings}>
										<img
											src={`/html-icon.svg`}
											alt='html Logo'
											className='h-12 w-12'
										/>
										<img
											src={`/css-icon.svg`}
											alt='css Logo'
											className='h-12 w-12'
										/>
										<img
											src={`/javascript-icon.svg`}
											alt='javascript Logo'
											className='h-12 w-12'
										/>
										<img
											src={`/typescript-icon.svg`}
											alt='typescript Logo'
											className='h-12 w-12'
										/>
										<img
											src={`/react-icon.svg`}
											alt='react Logo'
											className='h-12 w-12'
										/>
										<img
											src={`/nextjs-icon.svg`}
											alt='nextjs Logo'
											className='h-12 w-12'
										/>
										<img
											src={`/tailwind-icon.svg`}
											alt='tailwind Logo'
											className='h-12 w-12'
										/>
									</Slider>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
