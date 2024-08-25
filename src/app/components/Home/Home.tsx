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
					backgroundImage:
						'linear-gradient(62deg, #F7F3E3 0 50%, #C44536 0% 100%)',
					minHeight: '500px',
					maxHeight: '1200px',
					height: '100%',
					width: '100%',
				}}>
				<div className='container m-auto'>
					<div className='grid grid-cols-12'>
						<div className='bg-white flex flex-col justify-center col-span-12 md:col-span-5 md:bg-transparent'>
							<div className='container m-auto'>
								<div className='lg:pl-24 sm:pl-10 pl-0 py-20 md:py-0 md:text-start text-center'>
									<p className={`text-3xl md:text-base lg:text-2xl`}>Hello</p>
									<h1 className='text-5xl md:text-5xl lg:text-7xl xl:text-7xl mt-5 md:mt-3'>
										I'm Michael
									</h1>
									<h2 className='capitalize py-2 md:text-xl'>
										aspiring junior front-end developer
									</h2>
									<a
										href='/#portfolio'
										className=' cursor-pointerinline-block bg-[#C44536] transition-all duration-300 ease-in-out rounded-md py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-[#BFC8AD] hover:shadow-md transform hover:translate-y-1'>
										projects
									</a>

									<a
										href='script.js.pdf'
										download='script script.pdf'
										className='ml-10 cursor-pointer inline-block bg-[#197278] transition-all duration-300 ease-in-out rounded-md py-3 px-5 font-bold mt-8 uppercase md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base md:mt-5 xl:mt-10 hover:bg-[#BFC8AD] hover:shadow-md transform hover:translate-y-1'>
										my resume
									</a>
								</div>
							</div>
						</div>
						<div className='col-span-12 pt-[50px] md:bg-transparent  md:pt-[130px] md:col-span-7'>
							<div className='container m-auto'>
								<img src='/michal.png' alt='michal' decoding='async' />
							</div>
						</div>
					</div>
					<div className='container m-auto absolute'>
						<div className='px-3'>
							<div
								className='relative max-w-sm bottom-[70px] md:max-w-5xl xl:max-w-6xl px-5 lg:px-14 overflow-auto mx-auto bg-white rounded-md z-20'
								style={{ boxShadow: '#C44536 -10px 25px 50px 10px' }}>
								<div className='lg:py-10 md:py-6 sm:py-6 cursor cursor-all-scroll'>
									<Slider {...settings}>
										<img
											src='/html_logo.png'
											alt='html logo'
											// className='h-12 w-12'
										/>
										<img
											src='/css_logo.png'
											alt='css logo'
											// className='h-12 w-12'
										/>
										<img
											src='/javascript_logo.png'
											alt='javascript logo'
											// className='h-12 w-12'
										/>
										<img
											src='/typescript_loto.png'
											alt='typescript_loto'
											// className='h-12 w-12'
										/>
										<img
											src='/react_logo.png'
											alt='react logo'
											// className='h-12 w-12'
										/>
										<img
											src='/next_logo.png'
											alt='next logo'
											// className='h-12 w-12'
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
