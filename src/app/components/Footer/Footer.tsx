import React from 'react'

const Footer = () => {
	return (
		<div id='footer' className='mt-[5px]'>
			<div className='bg-white  pt-0 lg:pt-[100px]'>
				<div
					className='max-w-[1140px] bg-blue-500 rounded-md  px-[20px] sm:px-[64px] py-[64px] m-auto'
					style={{ transform: 'translate(0px, 70px)' }}>
					<div className='grid grid-cols-12'>
						<div className='col-span-12 lg:col-span-9'>
							<p className='text-[30px] text-white text-center lg:text-start'>
								{/* Ready To Get Started? */}
								Lorem ipsum dolor sit amet.
							</p>
							<p className='text-white font-sans text-center lg:text-start'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Laudantium iste, eaque nihil quisquam id illum quod, aut
								sapiente minus neque nostrum sunt corporis, laborum temporibus
								suscipit dolore. Tenetur, ducimus nostrum.
							</p>
						</div>
						<div className='col-span-12 lg:col-span-3'>
							<div className='flex justify-center mt-5 lg:mt-0'>
								<a
									target='blank'
									href='https://www.udemy.com/course/the-ultimate-nextjs13-portfolio-website-responsive/?referralCode=910E0431A13760E0695A'
									className='font-sans  cursor-pointer px-10 py-5 bg-[#223740] hover:bg-[#223740] rounded-md text-white font-medium text-lg'>
									Button
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
