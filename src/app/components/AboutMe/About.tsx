import React from 'react'

const About = () => {
	return (
		<>
			<div
				id='about-me-component'
				className='bg-[#E0F3FD] pt-[250px] mt-4  pb-[100px] lg:pb-[600px] relative lg:h-[800px]'>
				<div className='container m-auto'>
					<h1 className='text-[240px] w-[80%] overflow-hidden absolute lg:left-40 md:left-30 top-[-50px]  text-[#EAF7FC]'>
						About Me
					</h1>
					<h1 className='relative font-recoletaBlack text-5xl  text-[#48AFDE] mb-5 -mt-40  md:px-24 px-5'>
						About My Self
					</h1>
					<h4 className='relative w-full font-[300] md:w-3/4 lg:w-2/3 xl:w-1/2 font-recoleta text-[#223740] text-2xl mb-10 px-5 md:px-24'>
						Aspiring front end developer
					</h4>
				</div>
			</div>
		</>
	)
}

export default About
