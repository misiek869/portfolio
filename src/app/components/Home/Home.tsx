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
									<p
										className={`text-[#283D3B] text-3xl md:text-base lg:text-2xl`}>
										Hello
									</p>
									<h1 className='text-[#283D3B] text-5xl md:text-5xl lg:text-7xl xl:text-7xl mt-5 md:mt-3'>
										I'm Michael
									</h1>
									<h2 className='capitalize'>
										aspiring junior front-end developer
									</h2>
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
