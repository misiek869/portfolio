'use client'
import About from './components/AboutMe/About'
import Cta from './components/CallToAction/Cta'
import Home from './components/Home/Home'
import MySlider from './components/SliderCard/MySlider'

export default function HomePage() {
	return (
		<main className='min-h-screen relative'>
			<Home />
			<div
				id='portfolio'
				className='mt-0 pt-5 -mb-40'
				style={{
					backgroundImage:
						'linear-gradient(-62deg, #EEF7FB 0 50%,  white 0% 100%)',
					width: '100%',
				}}>
				<div className='container m-auto'>
					<p
						className='text-[300px]  text-[#F7FBFD] md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden'
						style={{ transform: 'translate(0px,-20px)' }}>
						portfolio
					</p>
					<div className='' style={{ transform: 'translate(0px, -250px)' }}>
						<p className='text-[#48AFDE]  md:pl-[80px] px-5 font-extrabold text-5xl'>
							recent work
						</p>
						<p className='max-w-2xl md:pl-[80px] px-5 font-[300] text-[16px] text-[#47626D] leading-8 mt-5'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Distinctio, assumenda laboriosam in ab ipsam at natus illum
							dolorum tempora dolor sit quo, laudantium, iure doloribus soluta
							placeat? Unde, totam quod.
						</p>
					</div>
				</div>
				<div style={{ transform: 'translate(0px,-150px)' }}>
					<MySlider />
				</div>
			</div>
			<About />
			<Cta />
		</main>
	)
}
