import React from 'react'

const ContactPage = () => {
	return (
		<>
			<div className='flex flex-col items-center justify-center w-full pt-[80px] pb-[80px] mt-4'>
				<div className='flex flex-col items-center justify-center bg-[url("/offices.jpg")] bg-cover bg-center w-full h-[400px]'>
					<div className='flex flex-col items-center justify-center  w-full h-full bg-[#223740]/75 backdrop-brightness-50'>
						<div className='text-center bg-[#48AFDE] py-[5px] px-[10px] tracking-wide uppercase font-medium text-[20px] text-white rounded-md'>
							<a href='#contact' className='cursor-pointer'>
								Contact Form
							</a>
						</div>
						<div className='mt-[10px]'>
							<h1 className='recoletaBold text-5xl text-[#48AFDE] p-2 text-center tracking-wide'>
								Hire Me
							</h1>
						</div>
						<div className='flex justify-center text-center mt-[10px] md:w-[700px] '>
							<p className='text-white font-[300] text-cener text-xl'>
								Are you looking for a responsible, professional front-end
								developer and designer for your website or your web application
								projects? Just leave me a message and tell me how I can help.
							</p>
						</div>
					</div>
				</div>
				<div className='px-[20px]'>
					<div className='sm:flex gap-[20px] mt-[50px] max-w-[1105px] w-full h-full'>
            
          </div>
				</div>
			</div>
		</>
	)
}

export default ContactPage
