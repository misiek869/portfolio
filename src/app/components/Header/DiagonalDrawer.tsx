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
								class='w-12 h-12 text-white cursor-pointer  '>
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
								stroke-width='1.5'
								stroke='currentColor'
								class='w-12 h-12 text-white'>
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
					</div>
				</div>
			</header>
		</>
	)
}

export default DiagonalDrawer
