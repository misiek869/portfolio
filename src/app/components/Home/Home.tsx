import React from 'react'

const Home = () => {
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
				</div>
			</div>
		</>
	)
}

export default Home
