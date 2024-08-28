import React from 'react'

const About = () => {
	return (
		<>
			<div
				id='about'
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
					<section className='relative flex flex-col lg:flex-row px-5 md:px-24'>
						<p className='w-full lg:w-1/3 text-[#223740] mr-0 mb-5  lg:mr-4 font-[200]'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
							quae sint quasi fuga, impedit eligendi mollitia iste ratione
							labore numquam eius veniam debitis unde soluta illum in. Neque,
							qui commodi.
						</p>
						<p className='w-full lg:w-1/3 text-[#223740] mr-0 mb-5  lg:mr-4 font-[200]'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
							quae sint quasi fuga, impedit eligendi mollitia iste ratione
							labore numquam eius veniam debitis unde soluta illum in. Neque,
							qui commodi.
						</p>
						<p className='w-full lg:w-1/3 text-[#223740] mr-0 mb-5  lg:mr-4 font-[200]'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
							quae sint quasi fuga, impedit eligendi mollitia iste ratione
							labore numquam eius veniam debitis unde soluta illum in. Neque,
							qui commodi.
						</p>
					</section>
				</div>
			</div>
			<div
				style={{
					backgroundImage: 'linear-gradient(45deg, #EAF7FC  70%,#48AFDE 30%)',
					width: '100%',
				}}
				className='lg:-mt-60'></div>
		</>
	)
}

export default About
