'use client'
import { useRouter, usePathname } from 'next/navigation'

type diagonalDrawerProps = {
	isOpen: boolean
	setIsOpen: any
	selectedIndexOne: number
	setSelectedIndexOne: any
}

const DiagonalDrawer = ({
	isOpen,
	setIsOpen,
	selectedIndexOne,
	setSelectedIndexOne,
}: diagonalDrawerProps) => {
	const route = useRouter()
	const pathName = usePathname()

	return (
		<>
			<div className='relative'>
				<div
					className={`z-50 ${
						pathName === '/' ? 'top-[0px]' : 'top-[0px]'
					} cursor-pointer fixed w-14 h-14 lg:w-24 lg:h-24 bg-[#48AFDE] top-0 flex justify-center items-center rounded-br-3xl `}>
					<div className='relative flex justify-center items-center w-7 h-7 lg:w-10 lg:h-10 '>
						{isOpen ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-12 h-12 text-white cursor-pointer  '>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-12 h-12 text-white'>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12'
								/>
							</svg>
						)}
					</div>
				</div>
			</div>
			<header
				className={`fixed w-full transition-all duration-500 z-40 ${
					pathName === '/' ? 'top-0' : 'top-[0px]'
				}`}>
				<div className='relative'>
					<div className='z-20 absolute transform-gpu ease-in-out duration-300 transition-all scale-100 opacity-100 bg-[#223740] bg-opacity-95 w-full  h-screen top-0 flex flex-col sm:flex-row lg:flex-col items-center justify-center'>
						<nav className='text-white text-center text-4xl lg:text-4xl 2xl:text-6xl uppercase'>
							<ul className='flex flex-col'>
								{/* home */}
								<li className='group my-4 xl:my-4 2xl:my-6 relative'>
									<div className='inline-bloc relative'>
										<a
											href='/#home'
											onClick={() => {
												setSelectedIndexOne(0)
												setIsOpen(false)
											}}
											className=''>
											Home
										</a>
										{setSelectedIndexOne === 0 ? (
											<div className='absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 -rotate-6  opacity-100  group-hover:rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10'></div>
										) : (
											''
										)}
										<div className='absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 rotate-0  opacity-0  group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10'></div>
									</div>
								</li>
								{/* portfolio */}
								<li className='group my-4 xl:my-4 2xl:my-6 relative'>
									<div className='inline-bloc relative'>
										<a
											href='/#portfolio'
											onClick={() => {
												setSelectedIndexOne(1)
												setIsOpen(false)
											}}
											className=''>
											Portfolio
										</a>
										{setSelectedIndexOne === 1 ? (
											<div className='absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 -rotate-6  opacity-100  group-hover:rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10'></div>
										) : (
											''
										)}
										<div className='absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 rotate-0  opacity-0  group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10'></div>
									</div>
								</li>
								{/* hire */}
								<li className='group my-4 xl:my-4 2xl:my-6 relative'>
									<div className='inline-bloc relative'>
										<a
											href='/#hire'
											onClick={() => {
												setSelectedIndexOne(2)
												setIsOpen(false)
											}}
											className=''>
											Hire Me
										</a>
										{setSelectedIndexOne === 2 ? (
											<div className='absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 -rotate-6  opacity-100  group-hover:rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10'></div>
										) : (
											''
										)}
										<div className='absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 rotate-0  opacity-0  group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10'></div>
									</div>
								</li>
								{/* about */}
								<li className='group my-4 xl:my-4 2xl:my-6 relative'>
									<div className='inline-bloc relative'>
										<a
											href='/#about'
											onClick={() => {
												setSelectedIndexOne(3)
												setIsOpen(false)
											}}
											className=''>
											About
										</a>
										{setSelectedIndexOne === 3 ? (
											<div className='absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 -rotate-6  opacity-100  group-hover:rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10'></div>
										) : (
											''
										)}
										<div className='absolute top-2 -left-2 w-full h-full transform-gpu transition-all duration-300 rotate-0  opacity-0  group-hover:-rotate-6 group-hover:opacity-100 bg-[#48AFDE] rounded-xl -z-10'></div>
									</div>
								</li>
							</ul>
						</nav>
						<section className='mt-14 sm:mt-12 lg:mt-14 text-center relative sm:absolute lg:relative sm:right-0 lg:right-0 h-auto sm:h-full lg:h-auto'>
							<h3 className='block sm:hidden lg:block font-bold text-[#48AFDE]  text-2xl uppercase mb-5 '>
								Follow Me
							</h3>
							<div className='flex justify-center flex-row sm:flex-col  lg:flex-row'>
								<a
									href=''
									target='blank'
									className='text-gray-300 hover:text-white transition-colors duration-3000'>
									<svg
										stroke='currentColor'
										fill='currentColor'
										stroke-width='0'
										viewBox='0 0 496 512'
										class='w-6 h-6 sm:w-8 sm:h-8 mb-0 sm:mb-5 lg:mb-0 mx-3 sm:mx-0 lg:mx-3'
										height='1em'
										width='1em'
										xmlns='http://www.w3.org/2000/svg'>
										<path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'></path>
									</svg>
								</a>
								<a
									href=''
									target='blank'
									className='text-gray-300 hover:text-white transition-colors duration-3000'>
									<svg
										stroke='currentColor'
										fill='currentColor'
										stroke-width='0'
										viewBox='0 0 448 512'
										class='w-6 h-6 sm:w-8 sm:h-8 mb-0 sm:mb-5 lg:mb-0 mx-3 sm:mx-0 lg:mx-3'
										height='1em'
										width='1em'
										xmlns='http://www.w3.org/2000/svg'>
										<path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'></path>
									</svg>
								</a>
							</div>
						</section>
					</div>
				</div>
			</header>
		</>
	)
}

export default DiagonalDrawer
